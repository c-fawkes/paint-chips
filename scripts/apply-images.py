import json, re

with open('/tmp/paint-image-urls.json') as f:
    urls = json.load(f)

with open('/Users/camfaux/Vibe_Projects/Paint Chips/data.js') as f:
    lines = f.readlines()

patched = 0
current_id = None

for i, line in enumerate(lines):
    # Track current painting id
    id_match = re.search(r'id:\s*(\d+),', line)
    if id_match:
        current_id = str(id_match.group(1))

    # Replace imageUrl line for current painting
    if current_id and 'imageUrl:' in line and current_id in urls and urls[current_id]:
        new_url = urls[current_id]
        # Preserve indentation and format
        indent = re.match(r'^(\s*)', line).group(1)
        lines[i] = f'{indent}imageUrl: "{new_url}",\n'
        patched += 1

with open('/Users/camfaux/Vibe_Projects/Paint Chips/data.js', 'w') as f:
    f.writelines(lines)

print(f'Patched {patched}/100 imageUrl entries')
