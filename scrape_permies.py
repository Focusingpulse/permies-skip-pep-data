import requests
from bs4 import BeautifulSoup
import json
import time
import re

BASE_URL = "https://permies.com"
START_URLS = [
    "https://permies.com/c/skip",
    "https://permies.com/wiki/skip-pep-bb"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

visited_urls = set()
all_tasks_data = []

def get_soup(url):
    try:
        response = requests.get(url, headers=headers, timeout=10)
        if response.status_code == 200:
            return BeautifulSoup(response.text, 'html.parser')
    except Exception as e:
        print(f"Failed to fetch {url}: {e}")
    return None

def parse_bb_or_badge_page(url, soup):
    """Extracts task details, BB names, tiers, and requirements from wiki/forum pages."""
    title_node = soup.find('h1') or soup.find('title')
    title = title_node.get_text(strip=True) if title_node else "Unknown Title"
    title = title.replace(" - Permies.com", "").replace(" - Permaculture Forums at Permies", "").strip()

    framework = "PEP"
    if "PEM" in title or "/pem-" in url:
        framework = "PEM"
    elif "PEA" in title or "/pea-" in url:
        framework = "PEA"
    elif "SKIP" in title:
        framework = "SKIP"

    content_div = soup.find('div', class_='postBody') or soup.find('div', class_='wikiContent') or soup
    
    tasks = []
    current_tier = "General"

    for element in content_div.find_all(['h2', 'h3', 'h4', 'ul', 'ol', 'p', 'li']):
        text = element.get_text(strip=True)
        if not text:
            continue

        lower_text = text.lower()
        if 'sand badge' in lower_text or 'sand tier' in lower_text:
            current_tier = 'Sand'
        elif 'straw badge' in lower_text or 'straw tier' in lower_text:
            current_tier = 'Straw'
        elif 'wood badge' in lower_text or 'wood tier' in lower_text:
            current_tier = 'Wood'
        elif 'iron badge' in lower_text or 'iron tier' in lower_text:
            current_tier = 'Iron'

        if element.name in ['li', 'p'] and len(text) > 8:
            if not any(ignore in text.lower() for ignore in ['reply', 'login', 'permies.com', 'edited by', 'apples', 'register']):
                tasks.append({
                    'tier': current_tier,
                    'text': text
                })

    if tasks:
        return {
            'title': title,
            'framework': framework,
            'url': url,
            'total_tasks': len(tasks),
            'tasks': tasks
        }
    return None

def crawl():
    queue = list(START_URLS)
    
    aspects = [
        "gardening", "natural-building", "woodland-care", "round-wood-woodworking",
        "tool-care", "earthworks", "dimensional-lumber-woodworking", "rocket",
        "food-prep-preservation", "animal-care", "foraging", "textiles",
        "greywater-and-willow-feeders", "metalworking", "plumbing-and-hot-water",
        "electricity", "community", "homesteading", "oddball", "commerce",
        "natural-medicine", "nest"
    ]
    for aspect in aspects:
        queue.append(f"{BASE_URL}/wiki/pep-badge-{aspect}")
        queue.append(f"{BASE_URL}/wiki/pem-badge-{aspect}")

    print(f"Starting crawl with {len(queue)} initial links...")

    while queue and len(visited_urls) < 500:  # Safety cap at 500 pages
        url = queue.pop(0)
        if url in visited_urls:
            continue

        visited_urls.add(url)
        print(f"[{len(visited_urls)}] Crawling: {url}")

        soup = get_soup(url)
        if not soup:
            continue

        page_data = parse_bb_or_badge_page(url, soup)
        if page_data:
            all_tasks_data.append(page_data)

        for a in soup.find_all('a', href=True):
            href = a['href']
            if any(key in href for key in ['/c/skip', '/wiki/', '/f/178/', '/t/']) and not href.endswith('#'):
                full_url = BASE_URL + href if href.startswith('/') else href
                if BASE_URL in full_url and not any(bad in full_url for bad in ['/user/', '/posts/', 'reply', 'login']):
                    if full_url not in visited_urls and full_url not in queue:
                        queue.append(full_url)

        time.sleep(1)

    output_filename = "permies_all_skip_pep_pem_tasks.json"
    with open(output_filename, 'w', encoding='utf-8') as f:
        json.dump(all_tasks_data, f, indent=2, ensure_ascii=False)

    print(f"\n Crawl complete! Extracted {len(all_tasks_data)} total badge & BB categories across SKIP/PEP/PEM.")
    print(f" Saved to {output_filename}")

if __name__ == "__main__":
    crawl()
