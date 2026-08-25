# -*- coding: utf-8 -*-
"""Generate The Village Money Lab coloring sheets (print-ready HTML).
15 sheets, each with title, line-art SVG (coloring book), and a talk prompt.
Outputs: money-lab/print-all.html + money-lab/sheet-01..15.html
"""
import os

INK = "#1a1a2e"          # same navy as the game
SW = "6"                 # thick stroke for little hands

def svg(body):
    return (f'<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" '
            f'aria-hidden="true" style="width:100%;height:auto;display:block;">{body}</svg>')

T = lambda x, y, fs, txt, anchor="middle", bold="false": (
    f'<text x="{x}" y="{y}" text-anchor="{anchor}" font-size="{fs}" font-weight="{bold}" '
    f'fill="{INK}" font-family="Georgia, serif">{txt}</text>')

ART = {
1: svg(
  # big coin
  '<circle cx="130" cy="150" r="78" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<circle cx="130" cy="150" r="62" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  + T(130, 172, 64, "$", bold="bold") +
  # dollar bill
  '<rect x="222" y="78" width="160" height="144" rx="14" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<rect x="240" y="96" width="124" height="108" rx="10" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<circle cx="252" cy="108" r="6" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<circle cx="390" cy="192" r="6" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  + T(302, 158, 34, "$1", bold="bold") +
  # sparkles
  '<path d="M290 60 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<path d="M40 262 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" fill="none" stroke="' + INK + '" stroke-width="3"/>'
),

2: svg(
  # globe
  '<circle cx="190" cy="150" r="92" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<ellipse cx="190" cy="150" rx="38" ry="92" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<path d="M98 150 Q190 110 282 150" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<path d="M98 150 Q190 190 282 150" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<path d="M190 58 L190 242 M98 120 L282 120 M98 180 L282 180" stroke="' + INK + '" stroke-width="3" stroke-dasharray="2 8" opacity="0.4"/>'
  # currency symbols floating around
  + T(52, 78, 40, "$", bold="bold") + T(340, 70, 40, "\u20ac", bold="bold")
  + T(52, 240, 40, "\u00a3", bold="bold") + T(338, 242, 40, "\u00a5", bold="bold")
),

3: svg(
  T(200, 54, 34, "EUR / USD", bold="bold") +
  # two coins
  '<circle cx="120" cy="160" r="66" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<circle cx="120" cy="160" r="52" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  + T(120, 180, 44, "\u20ac", bold="bold") +
  '<circle cx="280" cy="160" r="66" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<circle cx="280" cy="160" r="52" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  + T(280, 180, 44, "$", bold="bold") +
  # exchange loop arrow under
  '<path d="M120 236 L120 258 Q120 272 134 272 L266 272 Q280 272 280 258 L280 242" fill="none" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'
  '<path d="M280 242 l16 10 -16 10 z" fill="' + INK + '" stroke="none"/>'
),

4: svg(
  # awning
  '<path d="M60 96 L340 96 L330 130 L70 130 Z" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<path d="M70 130 L80 118 L88 130 L98 118 L106 130 L116 118 L124 130 L134 118 L142 130 L152 118 L160 130 L170 118 L178 130 L188 118 L196 130 L206 118 L214 130 L224 118 L232 130 L242 118 L250 130 L260 118 L268 130 L278 118 L286 130 L296 118 L304 130 L314 118 L322 130 L330 118" fill="none" stroke="' + INK + '" stroke-width="3" stroke-linejoin="round"/>'
  # sign
  '<rect x="120" y="146" width="160" height="44" rx="8" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  + T(200, 176, 24, "EXCHANGE", bold="bold") +
  # window with mini chart
  '<rect x="78" y="202" width="96" height="72" rx="6" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<path d="M84 260 L120 232 L142 244 L168 214" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>'
  # door
  '<rect x="210" y="190" width="70" height="84" rx="6" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<circle cx="264" cy="236" r="5" fill="' + INK + '"/>'
  '<path d="M218 190 Q245 158 272 190" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  # ground line
  '<path d="M50 274 L350 274" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'
),

5: svg(
  # UP arrow + sun
  '<path d="M112 58 L150 24 L150 52 L150 52 L188 52 L188 96 L150 96 L150 128 L112 96 L112 96 L112 58 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  + T(150, 82, 24, "UP", bold="bold") +
  '<circle cx="300" cy="62" r="26" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<path d="M300 22 L300 8 M300 102 L300 116 M344 62 L358 62 M256 62 L242 62 M330 34 L340 24 M270 90 L260 100 M330 90 L340 100 M270 34 L260 24" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>'
  + T(300, 68, 22, ":)") +
  # DOWN arrow + cloud
  '<path d="M112 236 L150 272 L150 244 L150 244 L188 244 L188 200 L150 200 L150 168 L112 200 L112 200 L112 236 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  + T(150, 222, 22, "DOWN", bold="bold") +
  '<path d="M282 266 Q272 232 302 226 Q296 206 322 208 Q332 186 352 202 Q376 198 374 222 Q392 234 372 252 Q376 266 358 268 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  '<path d="M300 236 l8 10 8 -10 M322 236 l8 10 8 -10 M344 236 l8 10 8 -10" stroke="' + INK + '" stroke-width="4" stroke-linecap="round" fill="none"/>'
),

6: svg(
  # candles
  '<path d="M70 250 L70 96 M88 250 L88 96" stroke="' + INK + '" stroke-width="4"/>'
  '<rect x="54" y="120" width="50" height="66" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<path d="M118 250 L118 128 M136 250 L136 128" stroke="' + INK + '" stroke-width="4"/>'
  '<rect x="102" y="128" width="50" height="44" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<path d="M166 250 L166 76 M184 250 L184 76" stroke="' + INK + '" stroke-width="4"/>'
  '<rect x="150" y="96" width="50" height="84" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<path d="M214 250 L214 118 M232 250 L232 118" stroke="' + INK + '" stroke-width="4"/>'
  '<rect x="198" y="138" width="50" height="40" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<path d="M262 250 L262 106 M280 250 L280 106" stroke="' + INK + '" stroke-width="4"/>'
  '<rect x="246" y="120" width="50" height="70" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  # open/close labels on last candle
  '<path d="M271 124 L336 124 M271 194 L336 194" stroke="' + INK + '" stroke-width="3" stroke-dasharray="4 4"/>'
  + T(346, 128, 16, "close") + T(346, 198, 16, "open") +
  # ground
  '<path d="M40 266 L360 266" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'
),

7: svg(
  # BULL (left)
  '<path d="M96 96 Q70 70 52 92 Q44 108 70 110" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>'
  '<path d="M128 96 Q150 62 168 84 Q180 102 152 110" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>'
  '<circle cx="112" cy="118" r="46" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<circle cx="112" cy="118" r="30" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  '<circle cx="100" cy="112" r="4" fill="' + INK + '"/>'
  '<path d="M96 132 Q112 148 128 132" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>'
  # BEAR (right)
  '<circle cx="288" cy="92" r="22" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<circle cx="288" cy="148" r="22" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<circle cx="288" cy="120" r="48" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<circle cx="288" cy="120" r="30" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  '<circle cx="300" cy="114" r="4" fill="' + INK + '"/>'
  '<path d="M298 136 Q288 150 278 136" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>'
  # vs
  + T(200, 150, 40, "vs", bold="bold") +
  # ground
  '<path d="M40 262 L360 262" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'
),

8: svg(
  # castle
  '<rect x="120" y="120" width="80" height="130" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<rect x="60" y="150" width="50" height="100" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<rect x="210" y="150" width="50" height="100" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  # battlements
  '<path d="M56 150 l0 -22 l14 0 l0 22 M84 150 l0 -22 l14 0 l0 22 M120 120 l0 -22 l16 0 l0 22 M152 120 l0 -22 l16 0 l0 22 M184 120 l0 -22 l14 0 l0 22 M210 150 l0 -22 l14 0 l0 22 M238 150 l0 -22 l14 0 l0 22 M252 150 l0 -14" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linejoin="round"/>'
  # arch door
  '<path d="M145 250 L145 190 Q160 166 175 190 L175 250 Z" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  # flag
  '<path d="M160 98 L160 60 L196 74 L160 88 Z" fill="#fff" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>'
  # support line below
  '<path d="M40 262 L360 262" stroke="' + INK + '" stroke-width="4" stroke-dasharray="6 6"/>'
  + T(368, 266, 18, "SUPPORT", anchor="start") +
  # resistance line above
  '<path d="M40 46 L360 46" stroke="' + INK + '" stroke-width="4" stroke-dasharray="6 6"/>'
  + T(368, 50, 18, "RESISTANCE", anchor="start") +
  # wave/arrow between
  '<path d="M60 60 Q100 40 140 60 T220 60 T300 60" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linecap="round" opacity="0.6"/>'
),

9: svg(
  # posts
  '<rect x="66" y="120" width="18" height="150" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<rect x="316" y="120" width="18" height="150" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  # net (safety net curve)
  '<path d="M75 180 Q200 240 325 180" fill="#fff" stroke="' + INK + '" stroke-width="6" stroke-linecap="round"/>'
  '<path d="M120 202 Q150 216 180 204 M220 216 Q250 226 280 214" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  # falling coin
  '<circle cx="200" cy="86" r="30" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<circle cx="200" cy="86" r="22" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  + T(200, 96, 22, "$", bold="bold") +
  # motion lines
  '<path d="M214 52 L232 36 M188 48 L168 34 M200 40 L200 20" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>'
  # ground
  '<path d="M40 270 L360 270" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'
),

10: svg(
  # fulcrum
  '<path d="M180 236 L220 236 L200 258 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  # beam
  '<path d="M120 200 L280 200" stroke="' + INK + '" stroke-width="8" stroke-linecap="round"/>'
  # chains
  '<path d="M120 200 L120 222 M280 200 L280 222" stroke="' + INK + '" stroke-width="4"/>'
  # pans
  '<path d="M88 222 L152 222 Q140 250 120 250 Q100 250 88 222 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  '<path d="M248 222 L312 222 Q300 250 280 250 Q260 250 248 222 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  # coin (small) left pan
  '<circle cx="120" cy="208" r="20" fill="#fff" stroke="' + INK + '" stroke-width="4"/>'
  + T(120, 215, 16, "$", bold="bold") +
  # star right pan
  '<path d="M280 196 l5.5 12 13 1.5 -9.5 9 2.5 13 -11.5 -6 -11.5 6 2.5 -13 -9.5 -9 13 -1.5 z" fill="#fff" stroke="' + INK + '" stroke-width="4" stroke-linejoin="round"/>'
  # ground
  '<path d="M60 266 L340 266" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'
),

11: svg(
  # shell
  '<path d="M128 150 Q130 96 200 96 Q270 96 272 150 Q272 206 200 206 Q128 206 128 150 Z" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<circle cx="170" cy="132" r="26" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  '<circle cx="230" cy="132" r="26" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  '<circle cx="200" cy="172" r="24" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  '<path d="M200 96 L200 206" stroke="' + INK + '" stroke-width="3" opacity="0.5"/>'
  # head
  '<circle cx="130" cy="180" r="26" fill="#fff" stroke="' + INK + '" stroke-width="6"/>'
  '<circle cx="120" cy="176" r="4" fill="' + INK + '"/>'
  '<path d="M122 192 Q130 200 138 192" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linecap="round"/>'
  # legs
  '<ellipse cx="150" cy="222" rx="18" ry="10" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<ellipse cx="252" cy="222" rx="18" ry="10" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<ellipse cx="186" cy="226" rx="16" ry="9" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  '<ellipse cx="218" cy="226" rx="16" ry="9" fill="#fff" stroke="' + INK + '" stroke-width="5"/>'
  # little sprout on shell
  '<path d="M200 96 L200 78 M200 82 Q188 70 178 72 M200 82 Q212 68 222 72" stroke="' + INK + '" stroke-width="4" fill="none" stroke-linecap="round"/>'
  # heart coin
  '<circle cx="246" cy="112" r="12" fill="#fff" stroke="' + INK + '" stroke-width="4"/>'
  '<path d="M246 108 c-3 -3 -8 -1 -8 3 c0 4 8 9 8 9 c0 0 8 -5 8 -9 c0 -4 -5 -6 -8 -3 z" fill="none" stroke="' + INK + '" stroke-width="2.5"/>'
  + T(246, 120, 10, "$") +
  # ground
  '<path d="M60 244 L340 244" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>'
),

12: svg(
  # magnifying glass
  '<circle cx="170" cy="150" r="78" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<circle cx="170" cy="150" r="64" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  '<path d="M228 208 L292 266" stroke="' + INK + '" stroke-width="14" stroke-linecap="round"/>'
  # chart inside lens
  '<path d="M118 172 L148 142 L168 158 L196 122 L216 148" fill="none" stroke="' + INK + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>'
  '<path d="M196 122 l14 8 -8 6 -8 -8 z" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<path d="M112 192 L228 192" stroke="' + INK + '" stroke-width="3" stroke-dasharray="5 5"/>'
  # sparkles
  '<path d="M300 60 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<path d="M70 52 l3 6 6 3 -6 3 -3 6 -3 -6 -6 -3 6 -3 z" fill="none" stroke="' + INK + '" stroke-width="3"/>'
),

13: svg(
  # notebook
  '<rect x="80" y="56" width="240" height="200" rx="10" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '"/>'
  '<path d="M92 84 L308 84 M92 112 L308 112 M92 140 L308 140 M92 168 L308 168 M92 196 L308 196" stroke="' + INK + '" stroke-width="3" stroke-dasharray="14 10" opacity="0.85"/>'
  # spiral
  '<path d="M98 56 q12 -10 24 0 M98 80 q12 -10 24 0 M98 104 q12 -10 24 0 M98 128 q12 -10 24 0 M98 152 q12 -10 24 0 M98 176 q12 -10 24 0 M98 200 q12 -10 24 0 M98 224 q12 -10 24 0 M98 248 q12 -10 24 0" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linecap="round" opacity="0.7"/>'
  # entries
  + T(120, 104, 18, "$10", bold="bold") + T(250, 104, 18, "EUR 9") +
  T(120, 132, 18, "\u20ac12", bold="bold") + T(250, 132, 18, "USD 13") +
  T(120, 160, 18, "$1", bold="bold") + T(250, 160, 18, "CHF 0.9") +
  # pencil
  '<path d="M300 270 L336 234 L266 164 L230 200 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  '<path d="M300 270 L312 258" stroke="' + INK + '" stroke-width="4"/>'
  '<path d="M266 164 L300 198" stroke="' + INK + '" stroke-width="4"/>'
  '<path d="M230 200 L242 188 L300 246 L288 258 Z" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  '<path d="M330 240 L338 248 L338 232 Z" fill="#fff" stroke="' + INK + '" stroke-width="4"/>'
),

14: svg(
  # open journal — two pages
  '<path d="M60 60 L200 44 L200 260 L60 244 Z" fill="#fff" stroke="' + INK + '" stroke-width="6" stroke-linejoin="round"/>'
  '<path d="M340 60 L200 44 L200 260 L340 244 Z" fill="#fff" stroke="' + INK + '" stroke-width="6" stroke-linejoin="round"/>'
  # spine
  '<path d="M200 44 L200 260" stroke="' + INK + '" stroke-width="6"/>'
  # writing lines left
  '<path d="M78 92 L180 86 M78 112 L180 106 M78 132 L180 126 M78 152 L180 146" stroke="' + INK + '" stroke-width="3" stroke-dasharray="10 8" opacity="0.8"/>'
  # date line left
  '<path d="M78 216 L150 212" stroke="' + INK + '" stroke-width="4"/>'
  + T(160, 218, 16, "date", anchor="start") +
  # right page: mini chart
  '<path d="M230 96 L262 84 L280 116 L306 92 L322 130" fill="none" stroke="' + INK + '" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>'
  '<path d="M230 150 L322 150" stroke="' + INK + '" stroke-width="3" stroke-dasharray="5 5"/>'
  '<path d="M230 176 L322 176 M230 196 L322 196" stroke="' + INK + '" stroke-width="3" stroke-dasharray="10 8" opacity="0.8"/>'
  # heart + coin right
  '<circle cx="290" cy="222" r="16" fill="#fff" stroke="' + INK + '" stroke-width="4"/>'
  '<path d="M290 217 c-4 -4 -10 -1 -10 4 c0 5 10 11 10 11 c0 0 10 -6 10 -11 c0 -5 -6 -8 -10 -4 z" fill="none" stroke="' + INK + '" stroke-width="2.5"/>'
),

15: svg(
  # shield
  '<path d="M200 40 L300 66 L300 150 Q300 226 200 262 Q100 226 100 150 L100 66 Z" fill="#fff" stroke="' + INK + '" stroke-width="' + SW + '" stroke-linejoin="round"/>'
  '<path d="M200 58 L282 80 L282 150 Q282 214 200 246 Q118 214 118 150 L118 80 Z" fill="none" stroke="' + INK + '" stroke-width="4"/>'
  # heart
  '<path d="M200 130 c-18 -18 -46 -8 -46 14 c0 22 46 46 46 46 c0 0 46 -24 46 -46 c0 -22 -28 -32 -46 -14 z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  # dollar on heart
  + T(200, 146, 20, "$", bold="bold") +
  # banner
  '<path d="M110 226 L290 226 L300 244 L290 262 L110 262 L100 244 Z" fill="#fff" stroke="' + INK + '" stroke-width="5" stroke-linejoin="round"/>'
  '<path d="M110 226 L110 244 M290 226 L290 244" stroke="' + INK + '" stroke-width="3"/>'
  + T(200, 250, 15, "protect \u00b7 learn \u00b7 trade") +
  # sparkles
  '<path d="M330 96 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" fill="none" stroke="' + INK + '" stroke-width="3"/>'
  '<path d="M70 90 l4 8 8 4 -8 4 -4 8 -4 -8 -8 -4 8 -4 z" fill="none" stroke="' + INK + '" stroke-width="3"/>'
),
}

SHEETS = [
    (1, "What Is Money?", "What do we use money for at home?"),
    (2, "What Is a Currency?", "What money do people use in other countries?"),
    (3, "Currency Pairs", "What does it mean to swap one money for another?"),
    (4, "The Currency Exchange Shop", "What would you sell at your own exchange shop?"),
    (5, "Up or Down?", "How can you tell if something is going up or down?"),
    (6, "Candlesticks", "What can a candle tell you about how people felt that day?"),
    (7, "Bull vs. Bear", "Which feels bigger: a bull charging up, or a bear swiping down?"),
    (8, "Support & Resistance (the Castle)", "Why does a castle wall hold when the wave hits it?"),
    (9, "Stop Loss = Safety Net", "What keeps you safe when things fall?"),
    (10, "Risk vs. Reward", "Why do you get more reward when you take more risk — and what is the catch?"),
    (11, "Patience Pays", "What grows slowly and steadily, like a turtle?"),
    (12, "The Trading Detective", "What clues would a detective look for on a chart?"),
    (13, "Paper Trading Day", "Why practice with pretend money before real money?"),
    (14, "Trading Journal", "What should you write down after you finish a trade?"),
    (15, "The Golden Rule of Trading", "Can you say the Golden Rule in your own words?"),
]

def sheet_markup(num, title, talk):
    return f'''    <section class="sheet" id="sheet-{num}">
      <header class="sheet-head">
        <span class="sheet-number">Sheet {num} of 15</span>
        <h2>{title}</h2>
      </header>
      <div class="art">{ART[num]}</div>
      <p class="talk"><strong>Talk about it:</strong> {talk}</p>
      <p class="color-note">Color it in, then talk about it together. There is no wrong color.</p>
      <footer class="sheet-foot">The Village &middot; Money Lab &middot; Coloring Sheet {num} of 15</footer>
    </section>'''

SCREEN_CSS = '''
  body { font-family: Georgia, 'Times New Roman', serif; background:#1a1a2e; margin:0; padding:0; }
  .toolbar { position:sticky; top:0; z-index:10; display:flex; gap:0.6rem; align-items:center;
             justify-content:center; flex-wrap:wrap; padding:0.7rem 1rem;
             background:rgba(10,10,26,0.95); border-bottom:1px solid rgba(255,255,255,0.12); }
  .toolbar button { background:#16213e; color:#e2e8f0; border:1px solid #4ade80; border-radius:8px;
                    padding:0.6rem 1rem; font-size:0.9rem; font-family:inherit; cursor:pointer; }
  .toolbar button:hover { background:#2d6a4f; }
  .toolbar a { color:#9ad0b2; font-size:0.85rem; text-decoration:none; }
  .sheets { background:#fff; color:#1a1a2e; max-width:820px; margin:1rem auto; padding:1rem 1.5rem 3rem;
            border-radius:10px; box-shadow:0 0 30px rgba(0,0,0,0.4); }
  .sheet { padding:0.4rem 0 1.2rem; }
  .sheet-head { display:flex; align-items:baseline; gap:0.8rem; justify-content:space-between;
                border-bottom:2px solid #e9c46a; padding-bottom:0.35rem; margin-bottom:0.6rem; }
  .sheet-number { color:#71797e; font-size:0.8rem; letter-spacing:0.05em; text-transform:uppercase; }
  .sheet h2 { margin:0; font-size:1.5rem; color:#16213e; }
  .art { max-width:560px; margin:0.4rem auto; }
  .talk { font-size:1.05rem; line-height:1.5; margin:0.5rem 0; }
  .talk strong { color:#0f3460; }
  .color-note { font-size:0.85rem; color:#71797e; font-style:italic; margin:0.2rem 0 0.4rem; }
  .sheet-foot { text-align:center; font-size:0.75rem; color:#94a3b8; letter-spacing:0.08em;
                text-transform:uppercase; margin-top:0.8rem; }
  @media print {
    .toolbar { display:none !important; }
    .sheets { box-shadow:none; max-width:none; margin:0; padding:0; border-radius:0; }
    .sheet { page-break-after:always; }
    .sheet:last-child { page-break-after:auto; }
    .art { max-width:520px; }
  }
  @page { size: letter; margin: 12mm; }
'''

def full_page(title, body, head_extra=""):
    return f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>{SCREEN_CSS}</style>
</head>
<body>
{body}
</body>
</html>'''

os.makedirs("money-lab", exist_ok=True)

# print-all.html
all_sheets = "\n".join(sheet_markup(*s) for s in SHEETS)
toolbar = '''<div class="toolbar">
  <button onclick="window.print()">🖨️ Print All 15 Sheets</button>
  <a href="../index.html" onclick="event.preventDefault(); window.history.back();">← Back to the Village</a>
</div>
<div class="sheets">
  <p style="text-align:center; font-size:0.9rem; color:#71797e; margin:0.2rem 0 1rem;">
    Print this whole page, or just pick the pages you want (e.g. pages 3–4) in the print dialog.
  </p>
''' + all_sheets + "\n</div>"

with open("money-lab/print-all.html", "w", encoding="utf-8") as f:
    f.write(full_page("Money Lab — Print All 15 Coloring Sheets", toolbar))

# individual sheets
for num, title, talk in SHEETS:
    one = f'''<div class="toolbar">
  <button onclick="window.print()">🖨️ Print This Sheet</button>
  <a href="print-all.html">← All 15 Sheets</a>
  <a href="sheet-{num+1:02d}.html" class="nav-next">Next →</a>
</div>
<div class="sheets">
{sheet_markup(num, title, talk)}
</div>'''
    with open(f"money-lab/sheet-{num:02d}.html", "w", encoding="utf-8") as f:
        f.write(full_page(f"Money Lab — Sheet {num} of 15: {title}", one))

print("wrote print-all.html + 15 individual sheets")
print("art count:", len(ART), "sheet count:", len(SHEETS))