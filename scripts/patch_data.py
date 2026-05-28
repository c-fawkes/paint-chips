#!/usr/bin/env python3
"""
Patch data.js:
1. Add  movement: "..."  before imageUrl: in every painting object
2. Insert const MOVEMENTS = { ... }; after the MUSEUMS forEach block
"""

import re

# ── Movement assignments ────────────────────────────────────────────────────
MOVEMENT_MAP = {}

assignments = {
    "Italian Renaissance": [1, 4, 8, 9, 10, 44, 59, 62, 63, 64, 66, 67, 85, 90, 95, 96, 97, 99, 100, 109, 110, 124, 135, 138, 139, 143, 144, 187, 197, 201, 202, 203, 204, 205, 206, 211, 212],
    "Northern Renaissance": [54, 57, 81, 84, 93, 107, 194, 195],
    "Baroque": [32, 34, 53, 58, 60, 65, 98, 104, 111, 125, 145, 149, 157, 163, 174, 188, 189, 207, 208, 209, 213, 214],
    "Dutch Golden Age": [7, 36, 42, 43, 68, 69, 70, 71, 72, 73, 74, 75, 76, 87, 88, 91, 113, 114, 115, 116, 126, 136, 140, 141, 146, 147, 148, 150, 162, 210],
    "Rococo": [51, 123, 186],
    "Neoclassicism": [5, 6, 33, 142, 171, 193],
    "Romanticism": [2, 3, 31, 55, 56, 82, 103, 122, 173],
    "Realism": [11, 12, 13, 15, 16, 105, 121, 166, 172],
    "Impressionism": [14, 17, 20, 21, 22, 41, 45, 118, 119, 151, 152, 153, 161],
    "Post-Impressionism": [18, 19, 23, 35, 37, 40, 47, 48, 49, 50, 77, 78, 79, 80, 83, 127, 128, 129, 130, 131, 132, 137, 155, 168, 169],
    "Expressionism": [94, 117, 154, 156, 160, 170, 179, 183, 192, 198, 199, 200],
    "Art Nouveau": [46, 92, 159, 190, 191],
    "Fauvism": [89, 120, 133, 134, 167, 184],
    "Cubism": [25, 30, 61, 86, 106, 164, 165, 180],
    "Surrealism": [24, 52, 102, 175, 178, 181, 185],
    "Abstract Expressionism": [101],
    "Pop Art": [27, 182],
    "Modernism": [26, 28, 29, 38, 39, 158, 176, 177],
    "Mannerism": [196],
}

for movement, ids in assignments.items():
    for i in ids:
        MOVEMENT_MAP[i] = movement

# ── MOVEMENTS block to insert ───────────────────────────────────────────────
MOVEMENTS_BLOCK = '''
const MOVEMENTS = {
  "Italian Renaissance": {
    era: "c. 1400–1600",
    summary: “Born in Florence and spreading across Italy, the Renaissance — meaning ‘rebirth’ — revived classical Greco-Roman ideals of beauty, proportion, and humanism. Artists mastered linear perspective, anatomical accuracy, and sfumato (soft tonal blending). The movement produced history’s most celebrated artworks, shifting painting from flat medieval symbolism to naturalistic, psychologically rich scenes.”,
    traits: ["Linear perspective and architectural depth","Idealized human anatomy and beauty","Classical mythology and religious subjects","Sfumato and chiaroscuro shading","Harmonious, balanced composition"],
    artists: ["Leonardo da Vinci","Raphael","Michelangelo","Sandro Botticelli","Titian","Paolo Veronese"]
  },
  "Northern Renaissance": {
    era: "c. 1400–1570",
    summary: "While Italian artists pursued idealized beauty, Northern European painters — in the Low Countries, Germany, and England — focused on microscopic observation of the everyday world. Using oil paint, which they pioneered, they rendered fabric textures, landscape light, and interior scenes with extraordinary precision. Their subjects ranged from peasant life to allegorical scenes packed with symbolic detail.",
    traits: ["Oil paint mastered for maximum detail","Symbolic objects embedded in everyday scenes","Realistic landscapes as expressive settings","Portraits of merchants and ordinary people","Minute attention to texture and material surfaces"],
    artists: ["Jan van Eyck","Rogier van der Weyden","Hieronymus Bosch","Hans Holbein the Younger","Pieter Bruegel the Elder"]
  },
  "Baroque": {
    era: "c. 1600–1750",
    summary: "Baroque painting embraced drama, movement, and emotional intensity as tools of persuasion — much of it commissioned by the Catholic Church after the Reformation. Caravaggio’s revolutionary use of extreme light and shadow (tenebrism) redefined how painters depicted sacred scenes. Across Europe, Baroque artists transformed religious subjects into visceral human dramas, while French painters like Poussin favored a more restrained classical approach.",
    traits: ["Extreme chiaroscuro — tenebrism","Dynamic diagonal compositions","Theatrical, emotionally charged figures","Rich, warm colors and deep shadows","Grand religious and mythological narratives"],
    artists: ["Caravaggio","Peter Paul Rubens","Diego Velázquez","Nicolas Poussin","Georges de La Tour","Artemisia Gentileschi"]
  },
  "Dutch Golden Age": {
    era: "c. 1620–1680",
    summary: "As the Dutch Republic flourished as a trading empire, a prosperous merchant class commissioned art for private homes rather than churches. The result was an extraordinary century of intimate domestic scenes, precise still lifes, individual portraits, and luminous landscapes. Rembrandt brought psychological depth to portraiture; Vermeer painted interior light with unmatched subtlety. These paintings helped establish the idea of art as personal, everyday pleasure.",
    traits: ["Intimate domestic and interior scenes","Mastery of natural and candlelight","Psychologically rich portraiture","Still life and genre painting elevated to high art","Precise rendering of everyday objects"],
    artists: ["Rembrandt van Rijn","Johannes Vermeer","Frans Hals","Jan Steen","Carel Fabritius","Jan Davidsz. de Heem"]
  },
  "Rococo": {
    era: "c. 1720–1780",
    summary: "Rococo emerged in early 18th-century France as a reaction against Baroque grandeur, turning instead toward lightness, playfulness, and sensual pleasure. Pastel colors, garden parties, and aristocratic leisure filled Rococo canvases. It was the art of pre-Revolutionary French nobility — charming, decorative, and deliberately unpolitical. The style spread across Europe before being displaced by the stern moral tone of Neoclassicism.",
    traits: ["Soft pastel and light color palettes","Aristocratic leisure and erotic subjects","Curved, ornamental compositions","Lightness and elegance over drama","Decorative surfaces and delicate details"],
    artists: ["Jean-Honoré Fragonard","Jean-Antoine Watteau","Thomas Gainsborough"]
  },
  "Neoclassicism": {
    era: "c. 1760–1830",
    summary: "Inspired by the excavations of Pompeii and Herculaneum, Neoclassicism looked to ancient Greece and Rome for moral guidance. The movement rejected Rococo frivolity in favor of austere compositions, heroic subjects, and clear moral lessons. Jacques-Louis David became its defining master, painting ancient heroes facing death with stoic calm. During the French Revolution and Napoleonic era, the style became overtly political.",
    traits: ["Classical Greek and Roman subjects","Clear, rational compositions","Heroic, idealized figures","Muted palette and clean outlines","Moral, civic, or historical themes"],
    artists: ["Jacques-Louis David","Jean-Auguste-Dominique Ingres","John Singleton Copley","John Trumbull"]
  },
  "Romanticism": {
    era: "c. 1800–1850",
    summary: "As industrialization transformed European society, Romanticism championed emotion, individualism, and the sublime power of nature. Romantic painters staged scenes of catastrophe, revolution, and awe — shipwrecks, uprisings, stormy seas — infusing them with drama and personal feeling. Goya’s dark visions form a proto-Expressionist strain, while Turner dissolved natural scenes into pure atmosphere. Constable found the sublime in ordinary English fields.",
    traits: ["Intense emotion prioritized over rationality","Dramatic, catastrophic subjects","Sublime nature: storms, mountains, ruins","Bold color and energetic brushwork","Individual heroism, suffering, and freedom"],
    artists: ["Eugène Delacroix","Théodore Géricault","Francisco Goya","J.M.W. Turner","John Constable","Thomas Lawrence"]
  },
  "Realism": {
    era: "c. 1840–1880",
    summary: "Realism arose as a social manifesto: paint the world as it is, not as mythology or idealism would have it. French Realists depicted peasant labor, urban poverty, and ordinary people with unsentimental honesty. In America, Eakins brought the same unflinching eye to surgery and sport; Homer to the sea. The movement challenged art’s traditional hierarchy of subjects — a laborer in a field deserved the same serious treatment as a Roman emperor.",
    traits: ["Ordinary people treated as worthy subjects","Unsentimental, truthful observation","Working-class and rural themes","Muted palette rejecting classical idealization","Documentary commitment to visible reality"],
    artists: ["Gustave Courbet","Jean-François Millet","Édouard Manet","Thomas Eakins","Winslow Homer","Camille Corot"]
  },
  "Impressionism": {
    era: "c. 1860–1890",
    summary: "Rejected by the Paris Salon, a group of painters began working outdoors (en plein air) to capture fleeting effects of light on a scene. Rather than blending paint to a smooth finish, they applied it in visible, broken brushstrokes — letting color and light replace line and outline. The name ‘Impressionism’ started as an insult, taken from Monet’s Impression, Sunrise, but stuck. The movement permanently changed what painting could be, prioritizing sensation over finish.",
    traits: ["Visible, broken brushstrokes","En plein air — painting outdoors","Light and atmosphere over precise detail","Modern everyday life as worthy subject","Color as the primary descriptive tool"],
    artists: ["Claude Monet","Pierre-Auguste Renoir","Edgar Degas","Camille Pissarro","Gustave Caillebotte","Mary Cassatt"]
  },
  "Post-Impressionism": {
    era: "c. 1880–1910",
    summary: "Post-Impressionism covers painters who built on Impressionism but pushed beyond it in radically different directions. Van Gogh charged brushstrokes with psychological urgency. Cézanne reduced objects to underlying geometric structures — the foundation of Cubism. Gauguin sought primitive expression in Tahiti. Seurat invented Pointillism, applying color as a science of tiny dots. These painters individually planted the seeds of nearly every modern art movement that followed.",
    traits: ["Structured composition (Cézanne)","Expressive, symbolic color and brushstroke (Van Gogh)","Primitive and symbolic imagery (Gauguin)","Scientific Pointillist color theory (Seurat)","Intensely personal, often visionary subjects"],
    artists: ["Vincent van Gogh","Paul Cézanne","Paul Gauguin","Georges Seurat","Henri de Toulouse-Lautrec"]
  },
  "Expressionism": {
    era: "c. 1880–1930",
    summary: "Where Impressionism captured the external world’s appearance, Expressionism distorted it to reveal inner emotional truth. Munch’s anguished figures and Schiele’s raw, contorted bodies made private suffering visible. The approach flourished especially in Germany and Austria, where artists confronted industrialization and existential anxiety with urgent visual language. Picasso’s Blue Period shares Expressionism’s emotional distortion even as it charts its own independent course.",
    traits: ["Distortion of form to convey emotion","Intense, non-naturalistic color","Psychological and existential themes","Anguished or vulnerable figures","Rejection of realism in favor of raw feeling"],
    artists: ["Edvard Munch","Egon Schiele","Ernst Ludwig Kirchner","Pablo Picasso (Blue Period)","Amedeo Modigliani","Francis Bacon"]
  },
  "Art Nouveau": {
    era: "c. 1890–1910",
    summary: "Art Nouveau unified painting, architecture, and design through sinuous organic curves and flat decorative surfaces. In Vienna, Gustav Klimt absorbed Byzantine gold mosaics, Japanese woodblock prints, and Egyptian ornament to create works of overwhelming richness. Gold leaf, symbolic imagery, and geometric patterning coexist with painterly naturalism in his canvases. The movement was soon overtaken by the harder geometries of modernism, but its brief flowering produced some of painting’s most opulent icons.",
    traits: ["Sinuous, organic lines and curves","Gold leaf and decorative surface pattern","Flat areas of color inspired by Japanese prints","Symbolic allegory expressed through ornament","Fusion of fine art and decorative craft"],
    artists: ["Gustav Klimt","Egon Schiele","Aubrey Beardsley","Alphonse Mucha"]
  },
  "Fauvism": {
    era: "c. 1905–1910",
    summary: "For only a few explosive years, a group of Paris painters liberated color from its obligation to describe reality. The critic who called them Fauves (‘wild beasts’) meant it as an insult. Matisse was their leader: red rooms, green-faced figures, dancers outlined in electric blue. Color became autonomous — used not to describe what things look like, but what they feel like. Fauvism was brief but its influence on Expressionism and every subsequent color-forward movement was permanent.",
    traits: ["Pure, unmixed color used non-naturalistically","Flat forms without realistic shading","Bold, simplified outlines","Joyful or sensory subjects","Color conveys emotion rather than describing reality"],
    artists: ["Henri Matisse","André Derain","Georges Braque (early work)"]
  },
  "Cubism": {
    era: "c. 1907–1925",
    summary: "Picasso and Braque dismantled the single-viewpoint perspective that had governed Western painting since the Renaissance. A Cubist painting shows multiple views of an object simultaneously — a face seen from front and profile at once, a guitar fragmented and reassembled on the picture plane. It was the most radical visual revolution of the 20th century, and its influence spread into architecture, film, typography, and design far beyond painting itself.",
    traits: ["Multiple simultaneous viewpoints in one image","Geometric fragmentation of form","Rejection of traditional perspective","Muted palette in Analytic Cubism","Collage and mixed media in Synthetic Cubism"],
    artists: ["Pablo Picasso","Georges Braque","Juan Gris","Fernand Léger","Marcel Duchamp"]
  },
  "Surrealism": {
    era: "c. 1924–1950",
    summary: "Founded in Paris by André Breton, Surrealism tapped the unconscious mind — dreams, desires, fears — as the truest creative source. Dalí painted melting clocks and burning giraffes with Renaissance precision to make the impossible appear real. Magritte used ordinary objects in impossible combinations to expose the gap between image and reality. Miró developed a spontaneous visual poetry of biomorphic shapes. Kahlo brought fierce personal mythology — pain, identity, the body — to the movement.",
    traits: ["Dream imagery and unconscious subject matter","Impossible juxtapositions of ordinary objects","Hyper-realistic rendering of impossible scenes","Automatism: spontaneous, unplanned mark-making","Exploration of desire, fear, and transformation"],
    artists: ["Salvador Dalí","René Magritte","Joan Miró","Frida Kahlo","Max Ernst","Giorgio de Chirico"]
  },
  "Abstract Expressionism": {
    era: "c. 1940–1960",
    summary: "The first major American art movement, Abstract Expressionism emerged in post-war New York as artists sought to express raw emotion through pure abstraction. Jackson Pollock dripped and poured enamel across floor canvases; Mark Rothko built monumental color fields meant to induce near-religious emotion. The movement rejected traditional craft, representation, and deliberate composition in favor of gesture, scale, and direct encounter between artist and surface.",
    traits: ["Large-scale canvases designed for full-body encounter","Pure abstraction with no recognizable subjects","Gestural mark-making (Action Painting)","Color as a primary emotional and spiritual vehicle","Process and chance incorporated as part of the work"],
    artists: ["Jackson Pollock","Mark Rothko","Willem de Kooning","Franz Kline","Lee Krasner"]
  },
  "Pop Art": {
    era: "c. 1955–1970",
    summary: "Pop Art exploded in New York and London in the late 1950s, turning imagery of consumer culture — soup cans, comic strips, celebrities, advertisements — into fine art. Warhol’s silkscreens blurred the line between commercial production and artistic creation; Lichtenstein blew up comic panels to gallery scale. Pop Art asked whether there was any meaningful difference between high culture and mass culture, and its irreverent answer — not really — permanently changed both.",
    traits: ["Imagery from mass media, advertising, and popular culture","Mechanical reproduction techniques (silkscreen, lithography)","Deadpan irony and humor","Celebrity and commodity as artistic subject","Bold graphic colors and hard outlines"],
    artists: ["Andy Warhol","Roy Lichtenstein","Jasper Johns","Richard Hamilton","Claes Oldenburg"]
  },
  "Modernism": {
    era: "c. 1860–1970",
    summary: "Modernism is a broad umbrella for 20th-century artists who rejected academic tradition and forged independent visions not easily classified under a single school. American Scene painters (Hopper, Wood) documented ordinary life with quiet intensity. Social Realists like Jacob Lawrence bore witness to the African-American experience. Latin American modernists like Tamayo fused European innovations with indigenous imagery. What unites them is seriousness of purpose and rejection of the past.",
    traits: ["Rejection of academic tradition and received rules","Individual artistic vision over shared style","Engagement with contemporary social life","Experiment with color, form, and composition","Multiple coexisting approaches within one broad era"],
    artists: ["Edward Hopper","Grant Wood","Andrew Wyeth","Rufino Tamayo","Jacob Lawrence","John Singer Sargent"]
  },
  "Mannerism": {
    era: "c. 1520–1600",
    summary: "Emerging from the crisis of the High Renaissance — the Sack of Rome, the Protestant Reformation — Mannerism deliberately violated the balance and harmony of its predecessors. Figures became elongated, poses artificially complex, colors acidic and artificial. Where Renaissance painters sought nature, Mannerist artists sought artifice, technical virtuosity, and intellectual sophistication. Arcimboldo’s composite heads of fruit and vegetables are among its most extreme and playful examples.",
    traits: ["Elongated, artificial figures","Serpentine ‘figura serpentinata’ poses","Non-naturalistic, acidic colors","Spatial ambiguity and complexity","Technical virtuosity as a value in itself"],
    artists: ["Giuseppe Arcimboldo","Pontormo","Rosso Fiorentino","Bronzino","Parmigianino"]
  }
};
'''

# ── Read the file ────────────────────────────────────────────────────────────
path = "/Users/camfaux/Vibe_Projects/Paint Chips/data.js"
with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

# ── Pass 1: insert movement: before imageUrl: in each painting object ────────
# Strategy: scan for lines matching `    imageUrl:` and look backwards
# to find the painting's id so we know which movement to assign.
# We track the "current id" by scanning for `  id: N,` pattern.

new_lines = []
current_id = None
movement_inserts = 0
already_has_movement = 0

# Regex to capture id at start of object
id_re = re.compile(r'^\s+id:\s+(\d+|\'u_[^\']+\')')
imageurl_re = re.compile(r'^(\s+)(imageUrl:)')
movement_re = re.compile(r'^\s+movement:')

i = 0
while i < len(lines):
    line = lines[i]

    # Track current painting id
    m = id_re.match(line)
    if m:
        raw = m.group(1)
        if raw.isdigit():
            current_id = int(raw)
        else:
            current_id = None  # user painting

    # If this is an imageUrl line and current painting has a movement
    if imageurl_re.match(line) and current_id is not None:
        # Check the previous non-empty line isn't already a movement:
        # look back through new_lines
        prev_content = [l for l in new_lines[-5:] if l.strip()]
        if prev_content and movement_re.match(prev_content[-1]):
            already_has_movement += 1
        else:
            movement = MOVEMENT_MAP.get(current_id)
            if movement:
                indent = imageurl_re.match(line).group(1)
                new_lines.append(f'{indent}movement: "{movement}",\n')
                movement_inserts += 1
            # else: unmapped id — skip (user paintings, etc.)

    new_lines.append(line)
    i += 1

print(f"movement: fields inserted: {movement_inserts}")
print(f"already had movement (skipped): {already_has_movement}")

# ── Pass 2: insert MOVEMENTS block after MUSEUMS forEach closes ──────────────
# Find the line `});` that closes PAINTINGS.forEach, which is the line
# right before `const CONTINENTS = ...`
# More robust: find `});` that is preceded by the forEach block.

insert_after_pattern = re.compile(r'^\}\);$')
continents_pattern = re.compile(r'^const CONTINENTS\b')

final_lines = []
movements_inserted = 0

j = 0
while j < len(new_lines):
    line = new_lines[j]
    final_lines.append(line)

    # After the `});` line, check if next non-empty line is `const CONTINENTS`
    if insert_after_pattern.match(line.rstrip()):
        # Peek ahead to confirm this is the MUSEUMS forEach close
        peek = j + 1
        while peek < len(new_lines) and new_lines[peek].strip() == '':
            peek += 1
        if peek < len(new_lines) and continents_pattern.match(new_lines[peek]):
            final_lines.append(MOVEMENTS_BLOCK)
            movements_inserted += 1

    j += 1

print(f"MOVEMENTS block inserted: {movements_inserted} time(s)")

# ── Write back ───────────────────────────────────────────────────────────────
with open(path, "w", encoding="utf-8") as f:
    f.writelines(final_lines)

print("Done. File written.")

# ── Quick verification ───────────────────────────────────────────────────────
with open(path, "r", encoding="utf-8") as f:
    content = f.read()

movement_field_count = len(re.findall(r'^\s+movement:', content, re.MULTILINE))
movements_const_count = len(re.findall(r'^const MOVEMENTS\b', content, re.MULTILINE))
print(f"\nVerification:")
print(f"  movement: field occurrences in file: {movement_field_count}")
print(f"  const MOVEMENTS declarations: {movements_const_count}")
