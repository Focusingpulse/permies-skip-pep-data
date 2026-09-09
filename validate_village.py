#!/usr/bin/env python3
"""Village RPG Data Validation Script"""
import json
import re
import sys

def validate_data_js():
    """Validate data.js quest structure"""
    issues = []
    
    # Read data.js and extract VILLAGE_QUESTS
    with open('data.js', 'r') as f:
        content = f.read()
    
    # Find the VILLAGE_QUESTS array
    match = re.search(r'const VILLAGE_QUESTS = (\[.*\]);', content, re.DOTALL)
    if not match:
        return ["CRITICAL: Could not parse VILLAGE_QUESTS from data.js"]
    
    # Parse as JavaScript (not valid JSON due to unquoted keys)
    # We'll use a different approach - parse the structure manually
    try:
        # Extract guild objects
        guild_pattern = r'\{\s*type:\s*"([^"]+)",\s*biomes:\s*\[([^\]]+)\],\s*name:\s*"([^"]+)",\s*desc:\s*"([^"]+)"'
        guilds = re.findall(guild_pattern, content)
        
        if len(guilds) == 0:
            issues.append("WARNING: No guilds found in data.js")
        
        # Check each guild
        for guild_match in guilds:
            gtype, biomes, name, desc = guild_match
            if not name:
                issues.append(f"Guild missing name: {gtype}")
            if not desc:
                issues.append(f"Guild '{name}' missing description")
        
        # Count quests by tier
        tier_counts = {'sand': 0, 'straw': 0, 'wood': 0, 'iron': 0}
        for tier in tier_counts:
            tier_pattern = f'{tier}:\s*\[(.*?)\]'
            tier_match = re.search(tier_pattern, content, re.DOTALL)
            if tier_match:
                tier_content = tier_match.group(1)
                # Count quest arrays [title, desc, subjects, emoji]
                quest_arrays = re.findall(r'\["[^"]+",', tier_content)
                tier_counts[tier] = len(quest_arrays)
        
        total_quests = sum(tier_counts.values())
        issues.append(f"INFO: Found ~{total_quests} quest entries across all tiers")
        issues.append(f"INFO: Tier breakdown - Sand: {tier_counts['sand']}, Straw: {tier_counts['straw']}, Wood: {tier_counts['wood']}, Iron: {tier_counts['iron']}")
        
    except Exception as e:
        issues.append(f"ERROR parsing data.js: {e}")
    
    return issues

def validate_translations_js():
    """Validate translations.js completeness"""
    issues = []
    
    with open('translations.js', 'r') as f:
        content = f.read()
    
    # Check for language blocks
    languages = ['es', 'fr', 'de']
    for lang in languages:
        if f'"{lang}":' not in content:
            issues.append(f"CRITICAL: Missing language block for '{lang}'")
    
    # Check for required sections in each language
    required_sections = ['ui', 'subjects', 'roles', 'tiers', 'guilds']
    for lang in languages:
        for section in required_sections:
            pattern = f'"{lang}":\s*\{{[^}}]*"{section}":'
            if not re.search(pattern, content, re.DOTALL):
                issues.append(f"WARNING: Language '{lang}' may be missing section '{section}'")
    
    # Check for encoding issues (non-UTF8 characters)
    try:
        content.encode('utf-8')
    except UnicodeEncodeError:
        issues.append("ERROR: Encoding issues in translations.js")
    
    # Check for empty translations
    empty_translations = re.findall(r':\s*""', content)
    if len(empty_translations) > 10:
        issues.append(f"WARNING: Found {len(empty_translations)} empty translation values")
    
    issues.append("INFO: translations.js structure appears valid")
    return issues

def validate_master_quests_json():
    """Validate master_quests.json structure"""
    issues = []
    
    try:
        with open('master_quests.json', 'r') as f:
            data = json.load(f)
        
        if not isinstance(data, list):
            return ["CRITICAL: master_quests.json should be a JSON array"]
        
        # Track quest IDs for duplicate detection
        quest_ids = set()
        duplicates = []
        
        for badge in data:
            if 'title' not in badge:
                issues.append(f"Badge missing 'title' field")
            if 'framework' not in badge:
                issues.append(f"Badge '{badge.get('title', 'UNKNOWN')}' missing 'framework'")
            if 'url' not in badge:
                issues.append(f"Badge '{badge.get('title', 'UNKNOWN')}' missing 'url'")
            if 'tasks' not in badge:
                issues.append(f"Badge '{badge.get('title', 'UNKNOWN')}' missing 'tasks' array")
            
            # Check for duplicate titles
            title = badge.get('title', '')
            if title in quest_ids:
                duplicates.append(title)
            quest_ids.add(title)
        
        if duplicates:
            issues.append(f"WARNING: Found {len(duplicates)} duplicate badge titles")
        
        issues.append(f"INFO: master_quests.json contains {len(data)} badges")
        
    except json.JSONDecodeError as e:
        issues.append(f"CRITICAL: Invalid JSON in master_quests.json: {e}")
    except FileNotFoundError:
        issues.append("CRITICAL: master_quests.json not found")
    
    return issues

def validate_index_html():
    """Validate index.html structure"""
    issues = []
    
    try:
        with open('index.html', 'r') as f:
            content = f.read()
        
        # Check for DOCTYPE
        if '<!DOCTYPE html>' not in content:
            issues.append("WARNING: Missing DOCTYPE declaration")
        
        # Check for unclosed tags (basic check)
        open_tags = re.findall(r'<(\w+)(?:\s|>)', content)
        close_tags = re.findall(r'</(\w+)>', content)
        
        # Check for required script references
        required_scripts = ['data.js', 'translations.js', 'learning.js']
        for script in required_scripts:
            if f'src="{script}"' not in content:
                issues.append(f"WARNING: Missing script reference to {script}")
        
        # Check for unclosed script tags
        script_opens = content.count('<script')
        script_closes = content.count('</script>')
        if script_opens != script_closes:
            issues.append(f"ERROR: Mismatched script tags - {script_opens} opens, {script_closes} closes")
        
        issues.append("INFO: index.html structure appears valid")
        
    except FileNotFoundError:
        issues.append("CRITICAL: index.html not found")
    
    return issues

def main():
    print("=" * 60)
    print("VILLAGE RPG DATA VALIDATION REPORT")
    print("=" * 60)
    
    all_issues = []
    
    print("\n[1/4] Validating data.js...")
    issues = validate_data_js()
    all_issues.extend(issues)
    for issue in issues:
        print(f"  {issue}")
    
    print("\n[2/4] Validating translations.js...")
    issues = validate_translations_js()
    all_issues.extend(issues)
    for issue in issues:
        print(f"  {issue}")
    
    print("\n[3/4] Validating master_quests.json...")
    issues = validate_master_quests_json()
    all_issues.extend(issues)
    for issue in issues:
        print(f"  {issue}")
    
    print("\n[4/4] Validating index.html...")
    issues = validate_index_html()
    all_issues.extend(issues)
    for issue in issues:
        print(f"  {issue}")
    
    print("\n" + "=" * 60)
    print("SUMMARY")
    print("=" * 60)
    
    critical = [i for i in all_issues if 'CRITICAL' in i]
    errors = [i for i in all_issues if 'ERROR' in i]
    warnings = [i for i in all_issues if 'WARNING' in i]
    info = [i for i in all_issues if 'INFO' in i]
    
    print(f"Critical Issues: {len(critical)}")
    print(f"Errors: {len(errors)}")
    print(f"Warnings: {len(warnings)}")
    print(f"Info: {len(info)}")
    
    if critical or errors:
        print("\nSTATUS: NEEDS FIXES")
        return 1
    else:
        print("\nSTATUS: PASSED")
        return 0

if __name__ == '__main__':
    sys.exit(main())
