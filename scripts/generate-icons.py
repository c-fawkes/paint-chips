#!/usr/bin/env python3
"""Generate the Beheld PWA icons: a gold cursive "B" on the dark icon background.

Requires Pillow and the Pacifico TTF (the app's wordmark font).
  pip install Pillow
  python3 generate-icons.py /path/to/Pacifico-Regular.ttf

Writes icon-192.png and icon-512.png to the repo root.
"""
import os
import sys
from PIL import Image, ImageDraw, ImageFont

BG   = (0x1a, 0x19, 0x17)   # same dark background as the original icon
GOLD = (0xc9, 0xa8, 0x4c)   # --gold
SS   = 4                    # supersample factor for crisp antialiasing
SAFE = 0.62                 # maskable safe-zone (letter height as fraction of icon)
LETTER = "B"

FONT_PATH = sys.argv[1] if len(sys.argv) > 1 else "/tmp/Pacifico-Regular.ttf"
OUT_DIR = os.path.join(os.path.dirname(__file__), "..")


def render(size):
    big = size * SS
    img = Image.new("RGBA", (big, big), BG + (255,))
    draw = ImageDraw.Draw(img)

    # Grow the font until the glyph's ink height fills the safe zone.
    target_h = big * SAFE
    fs = int(target_h)
    while True:
        font = ImageFont.truetype(FONT_PATH, fs)
        l, t, r, b = draw.textbbox((0, 0), LETTER, font=font)
        if (b - t) <= target_h or fs <= 4:
            break
        fs -= 2

    l, t, r, b = draw.textbbox((0, 0), LETTER, font=font)
    w, h = r - l, b - t
    x = (big - w) / 2 - l
    y = (big - h) / 2 - t
    draw.text((x, y), LETTER, font=font, fill=GOLD + (255,))

    return img.resize((size, size), Image.LANCZOS)


for s in (192, 512):
    render(s).save(os.path.join(OUT_DIR, f"icon-{s}.png"))
    print(f"wrote icon-{s}.png")
