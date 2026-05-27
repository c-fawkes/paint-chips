const PAINTINGS = [
  // ── LOUVRE MUSEUM ─────────────────────────────────────────────────────────
  {
    id: 1, rank: 1,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    year: "c. 1503–1519",
    medium: "Oil on poplar panel",
    dimensions: "77 × 53 cm",
    description: "The world's most recognized painting. Lisa Gherardini's enigmatic smile and Leonardo's sfumato technique — soft, smokeless transitions — have captivated viewers for over 500 years. Stolen in 1911, recovered in 1913, it now draws millions to the Louvre annually.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/330px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 2, rank: 14,
    title: "Liberty Leading the People",
    artist: "Eugène Delacroix",
    year: "1830",
    medium: "Oil on canvas",
    dimensions: "260 × 325 cm",
    description: "A allegory of the July Revolution, depicting Liberty as a bare-breasted woman leading the French people forward over fallen bodies. The figure would inspire the Statue of Liberty. Delacroix was not present at the revolution but painted himself into the crowd.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg/330px-La_Libert%C3%A9_guidant_le_peuple_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_129_-_apr%C3%A8s_restauration_2024.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 3, rank: 24,
    title: "The Raft of the Medusa",
    artist: "Théodore Géricault",
    year: "1818–1819",
    medium: "Oil on canvas",
    dimensions: "491 × 716 cm",
    description: "A monumental, controversial work depicting the aftermath of the wreck of the French naval frigate Méduse in 1816. 147 people were set adrift on a makeshift raft; only 15 survived. The painting exposed government corruption and launched Romanticism in France.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/330px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 4, rank: 52,
    title: "The Wedding at Cana",
    artist: "Paolo Veronese",
    year: "1563",
    medium: "Oil on canvas",
    dimensions: "677 × 994 cm",
    description: "The largest painting in the Louvre, depicting the biblical miracle of water turned to wine. Veronese set the scene in 16th-century Venice, filling it with 130 figures including portraits of contemporary figures like Titian, Tintoretto, and Bassano.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paolo_Veronese_008.jpg/330px-Paolo_Veronese_008.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 5, rank: 67,
    title: "The Coronation of Napoleon",
    artist: "Jacques-Louis David",
    year: "1806–1807",
    medium: "Oil on canvas",
    dimensions: "621 × 979 cm",
    description: "David's massive masterpiece documents Napoleon's self-coronation at Notre-Dame in 1804. Shown here crowning Josephine rather than himself — as he actually did — to satisfy her wish to be depicted. Over 200 figures are identifiable. Pope Pius VII sits to the right, hands on knees.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg/330px-Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 6, rank: 68,
    title: "The Oath of the Horatii",
    artist: "Jacques-Louis David",
    year: "1784",
    medium: "Oil on canvas",
    dimensions: "329.8 × 424.8 cm",
    description: "Three Roman brothers pledge their lives to their father before fighting to the death for Rome. The painting became a symbol of civic virtue and patriotic sacrifice, and is considered a foundational work of Neoclassicism. David painted it in Rome before the French Revolution.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Le_Serment_des_Horaces_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3692_%3B_MR_1432.jpg/330px-Le_Serment_des_Horaces_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3692_%3B_MR_1432.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 7, rank: 94,
    title: "The Lacemaker",
    artist: "Johannes Vermeer",
    year: "c. 1669–1671",
    medium: "Oil on canvas transferred to panel",
    dimensions: "24 × 21 cm",
    description: "Vermeer's smallest surviving painting shows a young woman absorbed in delicate lacework. The shallow depth of field — the threads blurring into dabs of paint at the edges — anticipates photographic techniques by two centuries. One of only 34–36 paintings attributed to Vermeer.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg/330px-Johannes_Vermeer_-_The_lacemaker_%28c.1669-1671%29.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 8, rank: 97,
    title: "Madonna of the Rocks",
    artist: "Leonardo da Vinci",
    year: "c. 1483–1486",
    medium: "Oil on wood",
    dimensions: "199 × 122 cm",
    description: "The first version of Leonardo's mysterious altarpiece shows the Virgin Mary, infant Jesus, infant John the Baptist, and an angel in an otherworldly rocky grotto. The painting was never delivered to its patrons; a second version (National Gallery, London) was produced later.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg/330px-Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 9, rank: 95,
    title: "Portrait of Baldassare Castiglione",
    artist: "Raphael",
    year: "c. 1514–1515",
    medium: "Oil on canvas",
    dimensions: "82 × 67 cm",
    description: "A portrait of the Italian diplomat and author whose book 'The Book of the Courtier' defined Renaissance ideals of the perfect gentleman. Rembrandt studied and copied this painting during an Amsterdam auction in 1639, influencing his approach to portraiture.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Baldassare_Castiglione%2C_by_Raffaello_Sanzio%2C_from_C2RMF_retouched.jpg/330px-Baldassare_Castiglione%2C_by_Raffaello_Sanzio%2C_from_C2RMF_retouched.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 10, rank: 96,
    title: "The Virgin and Child with Saint Anne",
    artist: "Leonardo da Vinci",
    year: "c. 1503–1519",
    medium: "Oil on wood",
    dimensions: "168 × 112 cm",
    description: "One of Leonardo's last major works, depicting three generations — Anne, Mary, and the Christ child — in an Alpine landscape. The pyramidal composition, unfinished background, and subtle sfumato make it a masterclass in Renaissance technique. Freud wrote a famous analysis of this painting.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Masolino_008.jpg/330px-Masolino_008.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },

  // ── MUSÉE D'ORSAY ──────────────────────────────────────────────────────────
  {
    id: 11, rank: 18,
    title: "Arrangement in Grey and Black No. 1 (Whistler's Mother)",
    artist: "James McNeill Whistler",
    year: "1871",
    medium: "Oil on canvas",
    dimensions: "144.3 × 162.4 cm",
    description: "Informally known as 'Whistler's Mother', this portrait of the artist's mother Anna was rejected by the Royal Academy before being accepted. Whistler insisted it was an exercise in color harmony, not a sentimental portrait. It became an American cultural icon, reproduced as a Mother's Day image.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/330px-Whistlers_Mother_high_res.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 12, rank: 30,
    title: "Olympia",
    artist: "Édouard Manet",
    year: "1863",
    medium: "Oil on canvas",
    dimensions: "130 × 190 cm",
    description: "Manet's nude reclining woman — a real person, not a goddess — caused a scandal at the 1865 Salon. Her direct gaze at the viewer and the flowers from a client (held by her Black maid) replaced mythological pretense with stark modern reality. Zola called it 'the first modern painting.'",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edouard_Manet_-_Olympia_-_Google_Art_ProjectFXD.jpg/330px-Edouard_Manet_-_Olympia_-_Google_Art_ProjectFXD.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 13, rank: 34,
    title: "Le Déjeuner sur l'herbe",
    artist: "Édouard Manet",
    year: "1863",
    medium: "Oil on canvas",
    dimensions: "208 × 265 cm",
    description: "Two clothed men picnic with a naked woman while another bathes in the background. Rejected from the Salon but exhibited at the Salon des Refusés, it outraged critics. The confrontational gaze of the nude woman and the modern setting — not mythology — made it revolutionary.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/330px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 14, rank: 26,
    title: "Bal du moulin de la Galette",
    artist: "Pierre-Auguste Renoir",
    year: "1876",
    medium: "Oil on canvas",
    dimensions: "131 × 175 cm",
    description: "A sun-dappled Sunday afternoon dance at a Montmartre café, filled with Renoir's friends. The dappled light filtering through chestnut trees became one of Impressionism's defining achievements. Renoir transported the large canvas daily from his nearby studio.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg/330px-Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 15, rank: 40,
    title: "The Gleaners",
    artist: "Jean-François Millet",
    year: "1857",
    medium: "Oil on canvas",
    dimensions: "83.8 × 111.8 cm",
    description: "Three peasant women bend to collect leftover grain after the harvest — a practice called gleaning, one of the few rights of the rural poor. Critics saw it as a political statement; the women's lowered heads formed the lowest rung of the social hierarchy contrasted with the wealthy harvest in the background.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg/330px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 16, rank: 44,
    title: "The Angelus",
    artist: "Jean-François Millet",
    year: "1857–1859",
    medium: "Oil on canvas",
    dimensions: "55.5 × 66 cm",
    description: "Two peasants pause from harvesting potatoes to pray at the sound of the distant church bell. Salvador Dalí was obsessed with the painting, claiming to see a hidden image of a buried child instead of a potato basket. X-ray studies later revealed Millet did indeed paint over a coffin.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Jean-Fran%C3%A7ois_Millet_%28II%29_001.jpg/500px-Jean-Fran%C3%A7ois_Millet_%28II%29_001.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 17, rank: 65,
    title: "The Dance Class",
    artist: "Edgar Degas",
    year: "1874",
    medium: "Oil on canvas",
    dimensions: "85 × 75 cm",
    description: "Degas's iconic view of ballet rehearsal shows young dancers being corrected by the famous teacher Jules Perrot. Unlike romanticized depictions, Degas shows the discipline and physical labor of dance. He produced over 1,500 paintings and sculptures of dancers, becoming their unofficial chronicler.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edgar_Degas_-_La_Classe_de_danse.jpg/330px-Edgar_Degas_-_La_Classe_de_danse.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 18, rank: 85,
    title: "Self-Portrait",
    artist: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "65 × 54 cm",
    description: "One of Van Gogh's most powerful self-portraits, painted at Saint-Paul-de-Mausole asylum in Saint-Rémy. The swirling blue-green brushwork of the background seems to merge with his jacket, suggesting an inner turbulence. Painted just over a year before his death.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28719161%29.jpg/500px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28719161%29.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 19, rank: 60,
    title: "Starry Night Over the Rhône",
    artist: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on canvas",
    dimensions: "72.5 × 92 cm",
    description: "Painted at night directly from observation in Arles, this precedes the more famous 'Starry Night' (MoMA) by nine months. Gas lighting from the city reflects in the Rhône River, while the stars wheel above. A couple walks along the bank below.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/330px-Vincent_van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 20, rank: 86,
    title: "L'Absinthe",
    artist: "Edgar Degas",
    year: "1875–1876",
    medium: "Oil on canvas",
    dimensions: "92 × 68 cm",
    description: "Two figures in a Montmartre café — a woman staring vacantly at a glass of absinthe, a man beside her. The painting shocked Victorian audiences with its unflinching depiction of urban loneliness and alcoholism. The woman was Degas's friend, actress Ellen Andrée; the man was printmaker Marcellin Desboutin.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg/330px-Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },

  // ── MARMOTTAN MONET MUSEUM ─────────────────────────────────────────────────
  {
    id: 21, rank: 23,
    title: "Impression, Sunrise",
    artist: "Claude Monet",
    year: "1872",
    medium: "Oil on canvas",
    dimensions: "48 × 63 cm",
    description: "The painting that named Impressionism. A critic used the title mockingly — and the movement adopted the insult as its badge. It shows the harbor at Le Havre at dawn; the orange sun reflected in the water is painted with just two strokes. Stolen in 1985, recovered in 1990.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/330px-Monet_-_Impression%2C_Sunrise.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Marmottan Monet Museum" }
  },

  // ── MUSÉE DE L'ORANGERIE ───────────────────────────────────────────────────
  {
    id: 22, rank: 19,
    title: "Water Lilies (Nymphéas)",
    artist: "Claude Monet",
    year: "1914–1926",
    medium: "Oil on canvas",
    dimensions: "8 panels, each approx. 200 × 425 cm",
    description: "Monet's monumental late masterpiece fills two oval rooms at the Orangerie, creating a complete immersive environment. Painted in his garden at Giverny over 12 years despite failing eyesight, the panels were his gift to France after World War I — 'a haven of peaceful meditation.'",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Reflections_of_Clouds_on_the_Water-Lily_Pond.jpg/330px-Reflections_of_Clouds_on_the_Water-Lily_Pond.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée de l'Orangerie" }
  },

  // ── MUSEUM OF MODERN ART (MoMA) ────────────────────────────────────────────
  {
    id: 23, rank: 2,
    title: "The Starry Night",
    artist: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "73.7 × 92.1 cm",
    description: "Painted from Van Gogh's asylum room window at Saint-Rémy-de-Provence (with the addition of an idealized village), this swirling nocturnal masterpiece was considered minor during his lifetime. He sent it to his brother Theo who called it a failure. Today it is MoMA's most visited work.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/330px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 24, rank: 11,
    title: "The Persistence of Memory",
    artist: "Salvador Dalí",
    year: "1931",
    medium: "Oil on canvas",
    dimensions: "24.1 × 33 cm",
    description: "Dalí's most famous painting is startlingly small. The melting watches came to him in a hallucination after staring at a melting Camembert cheese. The landscape is Port Lligat, Catalonia. Dalí called his method 'hand-painted dream photographs' — hyper-real images of irrational subjects.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/The_Persistence_of_Memory.jpg/330px-The_Persistence_of_Memory.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 25, rank: 21,
    title: "Les Demoiselles d'Avignon",
    artist: "Pablo Picasso",
    year: "1907",
    medium: "Oil on canvas",
    dimensions: "243.9 × 233.7 cm",
    description: "The proto-Cubist breakthrough that fractured Western art. Five nude figures in a brothel are shown simultaneously from multiple viewpoints; the two right-hand figures wear jagged African-style masks. Picasso kept the painting hidden in his studio for years before it was seen publicly in 1916.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/330px-Les_Demoiselles_d%27Avignon.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 26, rank: 31,
    title: "Christina's World",
    artist: "Andrew Wyeth",
    year: "1948",
    medium: "Tempera on panel",
    dimensions: "81.9 × 121.3 cm",
    description: "Christina Olson, Wyeth's neighbor in Maine, is shown dragging herself through a field toward a distant farmhouse. She had a degenerative muscle disease that left her unable to walk and refused to use a wheelchair. The painting's melancholy and isolation resonated with postwar America.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/Christinasworld.jpg/330px-Christinasworld.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 27, rank: 50,
    title: "Campbell's Soup Cans",
    artist: "Andy Warhol",
    year: "1962",
    medium: "Synthetic polymer paint on canvas",
    dimensions: "32 canvases, each 50.8 × 40.6 cm",
    description: "32 canvases, each depicting one variety of Campbell's soup, displayed in a row like supermarket shelves. When first exhibited at Ferus Gallery in Los Angeles, a neighboring gallery displayed actual cans in mockery. Warhol erased the boundary between commercial product and high art.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg/330px-Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 28, rank: 64,
    title: "Broadway Boogie-Woogie",
    artist: "Piet Mondrian",
    year: "1942–1943",
    medium: "Oil on canvas",
    dimensions: "127 × 127 cm",
    description: "Mondrian's last completed work, painted after fleeing the Netherlands to New York. The yellow grid pulsing with small colored squares captures the rhythm of jazz and the grid of Manhattan streets. A radical departure from his austere black-and-white grids — New York had freed him.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg/330px-Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 29, rank: 77,
    title: "The Sleeping Gypsy",
    artist: "Henri Rousseau",
    year: "1897",
    medium: "Oil on canvas",
    dimensions: "129.5 × 200.7 cm",
    description: "A self-taught customs officer painted this dreamlike scene of a lion sniffing a sleeping woman under a full moon. The flat, carefully rendered figures and mysterious moonlit silence became a template for the Surrealists decades later. Rousseau offered it to his hometown of Laval, which declined.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/La_Boh%C3%A9mienne_endormie.jpg/330px-La_Boh%C3%A9mienne_endormie.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 30, rank: 78,
    title: "Girl Before a Mirror",
    artist: "Pablo Picasso",
    year: "1932",
    medium: "Oil on canvas",
    dimensions: "162.3 × 130.2 cm",
    description: "Picasso's lover Marie-Thérèse Walter is shown contemplating her reflection in a fractured Cubist style. The bright colors — yellow, green, lavender — are unusual for Picasso. The image of the woman gazing at her reflection suggests youth contemplating age or mortality.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/60/GirlBeforeAMirror.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },

  // ── METROPOLITAN MUSEUM OF ART ─────────────────────────────────────────────
  {
    id: 31, rank: 45,
    title: "Washington Crossing the Delaware",
    artist: "Emanuel Leutze",
    year: "1851",
    medium: "Oil on canvas",
    dimensions: "378.5 × 647.7 cm",
    description: "The most famous image in American history painting. Leutze, a German-American, painted it in Düsseldorf using the Rhine as the Delaware. The night crossing of December 25–26, 1776 preceded the Battle of Trenton. The painting romanticizes the event — Washington would not have stood in the boat.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/500px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 32, rank: 66,
    title: "Aristotle with a Bust of Homer",
    artist: "Rembrandt van Rijn",
    year: "1653",
    medium: "Oil on canvas",
    dimensions: "143.5 × 136.5 cm",
    description: "Commissioned by a Sicilian nobleman, this rare mythological-historical subject shows Aristotle meditating on a bust of Homer, his hand resting on a medallion portrait of his patron Alexander the Great. Rembrandt meditates on the relationship between wealth, wisdom, and art.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Rembrandt_-_Aristotle_with_a_Bust_of_Homer_-_WGA19232.jpg/330px-Rembrandt_-_Aristotle_with_a_Bust_of_Homer_-_WGA19232.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 33, rank: 71,
    title: "The Death of Socrates",
    artist: "Jacques-Louis David",
    year: "1787",
    medium: "Oil on canvas",
    dimensions: "129.5 × 196.2 cm",
    description: "Socrates, condemned by Athens, reaches for the hemlock while lecturing his weeping disciples on the immortality of the soul. David painted this two years before the French Revolution, and it was immediately read as a political statement about civic virtue. Stoic calm versus emotional distress.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/330px-David_-_The_Death_of_Socrates.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 34, rank: 75,
    title: "Portrait of Juan de Pareja",
    artist: "Diego Velázquez",
    year: "1650",
    medium: "Oil on canvas",
    dimensions: "81.3 × 69.9 cm",
    description: "Velázquez painted this as a warm-up exercise before painting Pope Innocent X in Rome. Juan de Pareja was Velázquez's enslaved assistant, a gifted painter himself. Velázquez freed him in 1654. When exhibited at the Pantheon in Rome, contemporaries said all other portraits looked 'dead' beside it.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Retrato_de_Juan_Pareja%2C_by_Diego_Vel%C3%A1zquez.jpg/330px-Retrato_de_Juan_Pareja%2C_by_Diego_Vel%C3%A1zquez.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 35, rank: 76,
    title: "Cypresses",
    artist: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "93.4 × 74 cm",
    description: "Painted in Saint-Rémy the same month as Starry Night, Van Gogh described cypresses as 'beautiful as regards line and proportion, like an Egyptian obelisk.' The flame-like tree dominates the foreground in characteristic swirling brushstrokes. He sent it to his brother Theo, who later sold it.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg/500px-Wheat-Field-with-Cypresses-%281889%29-Vincent-van-Gogh-Met.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 36, rank: 93,
    title: "Young Woman with a Water Pitcher",
    artist: "Johannes Vermeer",
    year: "c. 1662",
    medium: "Oil on canvas",
    dimensions: "45.7 × 40.6 cm",
    description: "A woman in a white cap opens a window while holding a pitcher, suffusing the room with diffuse morning light. Vermeer's mastery of domestic interior light is evident in the blue cloth draped over the table and the gleam of the silver basin. One of his finest works.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Jan_Vermeer_van_Delft_019.jpg/330px-Jan_Vermeer_van_Delft_019.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },

  // ── ART INSTITUTE OF CHICAGO ───────────────────────────────────────────────
  {
    id: 37, rank: 15,
    title: "A Sunday on La Grande Jatte",
    artist: "Georges Seurat",
    year: "1884–1886",
    medium: "Oil on canvas",
    dimensions: "207.5 × 308.1 cm",
    description: "The masterpiece of Pointillism — thousands of tiny dots of pure color that blend in the viewer's eye. Seurat spent two years making dozens of preliminary studies before painting this 10-foot canvas. The rigid, statue-like figures have been interpreted as a critique of bourgeois leisure.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/330px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 38, rank: 16,
    title: "American Gothic",
    artist: "Grant Wood",
    year: "1930",
    medium: "Oil on Beaver Board",
    dimensions: "78 × 65.3 cm",
    description: "Wood saw a Carpenter Gothic-style house in Eldon, Iowa and imagined who would live there. He used his dentist and his sister as models (not a husband and wife). Endlessly parodied, it became America's most reproduced painting. Wood insisted it was not a satire but a celebration of Midwestern character.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/330px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 39, rank: 28,
    title: "Nighthawks",
    artist: "Edward Hopper",
    year: "1942",
    medium: "Oil on canvas",
    dimensions: "84.1 × 152.4 cm",
    description: "Four figures in a late-night diner on a deserted Greenwich Village street. The harsh artificial light, the curved counter, and the lack of any door or exit create an atmosphere of urban isolation. Painted shortly after Pearl Harbor, it captured America's mood of quiet dread. Hopper said it showed 'the loneliness of a large city.'",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/330px-Nighthawks_by_Edward_Hopper_1942.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 40, rank: 62,
    title: "At the Moulin Rouge",
    artist: "Henri de Toulouse-Lautrec",
    year: "1892–1895",
    medium: "Oil on canvas",
    dimensions: "123 × 141 cm",
    description: "A backstage view of Paris's most famous cabaret, the Moulin Rouge. In the right foreground, a woman's face is cut off by the frame and lit with an eerie green light. Toulouse-Lautrec himself sits at the table, tiny amid his tall friends. He was a regular here and chronicled the demi-monde of Montmartre.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Henri_de_Toulouse-Lautrec%2C_At_the_Moulin_Rouge.jpg/330px-Henri_de_Toulouse-Lautrec%2C_At_the_Moulin_Rouge.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 41, rank: 70,
    title: "Paris Street; Rainy Day",
    artist: "Gustave Caillebotte",
    year: "1877",
    medium: "Oil on canvas",
    dimensions: "212.2 × 276.2 cm",
    description: "The intersection near the Gare Saint-Lazare on a rainy day, with modern Haussmann-era Paris as backdrop. Unusually large for an Impressionist work, it uses the sharp perspective of early photography. Caillebotte was the great collector and financier of Impressionism, donating his collection to the state.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/330px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },

  // ── NATIONAL GALLERY OF ART (Washington DC) ────────────────────────────────
  {
    id: 42, rank: 92,
    title: "Girl with the Red Hat",
    artist: "Johannes Vermeer",
    year: "c. 1665–1666",
    medium: "Oil on panel",
    dimensions: "22.8 × 18 cm",
    description: "One of Vermeer's smallest works, painted on mahogany panel rather than canvas. The young woman wearing a large red hat and an exotic lion-head finial turns toward us as if responding to a call. Recent technical analysis has raised questions about whether Vermeer painted the whole work.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Vermeer_-_Girl_with_a_Red_Hat.JPG/500px-Vermeer_-_Girl_with_a_Red_Hat.JPG",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 43, rank: 91,
    title: "Self-Portrait",
    artist: "Rembrandt van Rijn",
    year: "1659",
    medium: "Oil on canvas",
    dimensions: "84.5 × 66 cm",
    description: "One of Rembrandt's late self-portraits, painted two years after his bankruptcy. The grave, unflinching gaze of this 53-year-old man — who has lost his house and possessions — shows a psychological depth unmatched in portraiture. He painted over 80 self-portraits across his career.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Rembrandt_self_portrait.jpg/500px-Rembrandt_self_portrait.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 44, rank: 99,
    title: "The Alba Madonna",
    artist: "Raphael",
    year: "c. 1510",
    medium: "Oil on panel transferred to canvas",
    dimensions: "94.5 cm diameter (tondo)",
    description: "One of the finest tondo (circular) paintings in existence. The Virgin Mary, seated on the ground in a landscape, holds the Christ child who reaches for the cross held by the infant John the Baptist. The poses derive from Leonardo but the harmony and the warm landscape are purely Raphael.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Raphael_-_The_Alba_Madonna_-_Google_Art_Project.jpg/330px-Raphael_-_The_Alba_Madonna_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },

  // ── PHILLIPS COLLECTION (Washington DC) ───────────────────────────────────
  {
    id: 45, rank: 47,
    title: "The Luncheon of the Boating Party",
    artist: "Pierre-Auguste Renoir",
    year: "1880–1881",
    medium: "Oil on canvas",
    dimensions: "129.9 × 172.7 cm",
    description: "Friends of Renoir at a riverside restaurant on the Seine. The figures include future wife Aline Charigot (front left, playing with a dog) and the impressionist Gustave Caillebotte (back right). Duncan Phillips called it 'one of the greatest paintings in the world' when he bought it in 1923.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/330px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "Phillips Collection" }
  },

  // ── NEUE GALERIE (New York) ────────────────────────────────────────────────
  {
    id: 46, rank: 41,
    title: "Portrait of Adele Bloch-Bauer I",
    artist: "Gustav Klimt",
    year: "1907",
    medium: "Oil, silver, and gold on canvas",
    dimensions: "138 × 138 cm",
    description: "The 'Woman in Gold,' Klimt's most elaborate and expensive work to commission. The gold-leaf technique draws on Byzantine mosaics and Japanese lacquerwork. Adele Bloch-Bauer was a Viennese Jewish socialite; the painting was looted by the Nazis. After a legal battle, it was returned to her heirs in 2006 for $135 million.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gustav_Klimt_046.jpg/330px-Gustav_Klimt_046.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Neue Galerie New York" }
  },

  // ── J. PAUL GETTY MUSEUM ──────────────────────────────────────────────────
  {
    id: 47, rank: 51,
    title: "Irises",
    artist: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "71 × 93 cm",
    description: "Painted in the garden of Saint-Paul-de-Mausole asylum, one week after Van Gogh's arrival. He called it 'the lightning rod for my illness' — painting kept him sane. The intense blue of the irises against the orange of the soil is a study in complementary colors. Sold in 1987 for a then-record $53.9 million.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/330px-Irises-Vincent_van_Gogh.jpg",
    location: { continent: "North America", country: "USA", city: "Los Angeles", museum: "J. Paul Getty Museum" }
  },

  // ── PHILADELPHIA MUSEUM OF ART ─────────────────────────────────────────────
  {
    id: 48, rank: 87,
    title: "The Large Bathers",
    artist: "Paul Cézanne",
    year: "1900–1906",
    medium: "Oil on canvas",
    dimensions: "210.5 × 250.8 cm",
    description: "Cézanne's final and largest version of his Bathers series, worked on for seven years but left unfinished at his death. The figures — not from life but from imagination and old master drawings — are wedged between the arching trees and sky. Matisse and Picasso both owned smaller versions and credited it as transformative.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Les_Grandes_Baigneuses%2C_par_Paul_C%C3%A9zanne%2C_Yorck%2C_2.jpg/500px-Les_Grandes_Baigneuses%2C_par_Paul_C%C3%A9zanne%2C_Yorck%2C_2.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Philadelphia Museum of Art" }
  },

  // ── BARNES FOUNDATION (Philadelphia) ──────────────────────────────────────
  {
    id: 49, rank: 88,
    title: "The Card Players",
    artist: "Paul Cézanne",
    year: "1894–1895",
    medium: "Oil on canvas",
    dimensions: "47.5 × 57 cm",
    description: "The most intimate of Cézanne's five versions of this subject, showing just two peasant players at a table. The solid geometry of the figures — particularly the cylindrical quality — directly influenced Cubism. In 2011, this version sold (from a private estate) for over $250 million, then the highest price ever paid for a painting.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg/330px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Barnes Foundation" }
  },

  // ── YALE UNIVERSITY ART GALLERY ────────────────────────────────────────────
  {
    id: 50, rank: 57,
    title: "The Night Café",
    artist: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on canvas",
    dimensions: "72.4 × 92.1 cm",
    description: "Van Gogh called this 'one of the ugliest pictures I have done.' He clashed the most jarring colors — blood red walls against yellow-green gas lamps — to show that 'the café is a place where one can ruin oneself, go mad, commit crimes.' A lone insomniac leans on a table under the billiard table's gaze.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/330px-Vincent_Willem_van_Gogh_076.jpg",
    location: { continent: "North America", country: "USA", city: "New Haven", museum: "Yale University Art Gallery" }
  },

  // ── HUNTINGTON LIBRARY (San Marino, CA) ───────────────────────────────────
  {
    id: 51, rank: 90,
    title: "The Blue Boy",
    artist: "Thomas Gainsborough",
    year: "c. 1770",
    medium: "Oil on canvas",
    dimensions: "177.9 × 121.9 cm",
    description: "Gainsborough painted this elegant portrait to challenge Sir Joshua Reynolds's assertion that blue should not be the dominant color in a composition. The boy — possibly Jonathan Buttall, son of a hardware merchant — is dressed in a Van Dyck-era blue satin costume, merging past glamour with 18th-century reality.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/The_Blue_Boy.jpg/330px-The_Blue_Boy.jpg",
    location: { continent: "North America", country: "USA", city: "San Marino", museum: "Huntington Library" }
  },

  // ── MUSEO DE ARTE MODERNO (Mexico City) ───────────────────────────────────
  {
    id: 52, rank: 27,
    title: "The Two Fridas",
    artist: "Frida Kahlo",
    year: "1939",
    medium: "Oil on canvas",
    dimensions: "173.5 × 173 cm",
    description: "Kahlo's largest painting, made during her divorce from Diego Rivera. Two versions of herself sit hand in hand: the European Frida (white dress, broken heart exposed) and the Mexican Frida (Tehuana dress, whole heart). They share a vein running between them — her European self's heart is cut, bleeding onto her dress.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f9/The_Two_Fridas.jpg",
    location: { continent: "North America", country: "Mexico", city: "Mexico City", museum: "Museo de Arte Moderno" }
  },

  // ── PRADO MUSEUM ──────────────────────────────────────────────────────────
  {
    id: 53, rank: 8,
    title: "Las Meninas",
    artist: "Diego Velázquez",
    year: "1656",
    medium: "Oil on canvas",
    dimensions: "318 × 276 cm",
    description: "The most analyzed painting in art history. Velázquez shows himself painting a large canvas; reflected in a mirror at the back are the king and queen. The Infanta Margarita stands at center attended by her ladies-in-waiting. Who is the subject — the Infanta, the painter, or the royal couple in the mirror?",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/330px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 54, rank: 17,
    title: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    year: "c. 1490–1510",
    medium: "Oil on oak panels",
    dimensions: "205.5 × 384.9 cm (open)",
    description: "A triptych of astonishing strangeness: left panel shows Eden, the center a world of erotic pleasures and fantastical creatures, the right panel Hell. No definitive interpretation exists. Medieval scholars, Surrealists, and psychologists have all claimed it. The imagery seems both timeless and utterly alien.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/330px-The_Garden_of_earthly_delights.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 55, rank: 20,
    title: "The Third of May 1808",
    artist: "Francisco Goya",
    year: "1814",
    medium: "Oil on canvas",
    dimensions: "268 × 347 cm",
    description: "The archetype of anti-war painting, showing Spanish civilians executed by Napoleonic soldiers. The anonymous firing squad faces a man in white with arms raised — echoing the crucifixion — and a lantern on the ground illuminates the condemned but leaves the soldiers in shadow. Manet and Picasso were both directly influenced by it.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/330px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 56, rank: 39,
    title: "Saturn Devouring His Son",
    artist: "Francisco Goya",
    year: "c. 1819–1823",
    medium: "Oil mural transferred to canvas",
    dimensions: "143.5 × 81.4 cm",
    description: "One of Goya's 'Black Paintings' — murals painted on the walls of his own house late in life, in private, never intended for public display. The wild-eyed Saturn consumes a human body with savage intensity. Its rough brushwork and psychological extremity anticipate Expressionism by nearly a century.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/330px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 57, rank: 61,
    title: "The Descent from the Cross",
    artist: "Rogier van der Weyden",
    year: "c. 1435",
    medium: "Oil on oak panel",
    dimensions: "204.5 × 261.5 cm",
    description: "The supreme masterpiece of Early Netherlandish painting. Ten figures remove Christ's body from the cross in a shallow, gold-leafed space. Van der Weyden focuses on emotional expression with an intensity not seen before — Mary's swoon mirrors her son's limp body exactly, as if struck by the same invisible arrow.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Weyden_Deposition.jpg/500px-Weyden_Deposition.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 58, rank: 79,
    title: "The Surrender of Breda",
    artist: "Diego Velázquez",
    year: "1635",
    medium: "Oil on canvas",
    dimensions: "307.5 × 370.5 cm",
    description: "The Dutch city of Breda surrendered to Spanish forces in 1625. Velázquez shows the moment the Dutch commander hands the key to the Spanish general Spinola — who gently prevents the Dutchman from kneeling, creating a scene of magnanimous victory. The forest of lances on the Spanish side gives the painting its nickname 'Las Lanzas.'",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Velazquez-The_Surrender_of_Breda.jpg/330px-Velazquez-The_Surrender_of_Breda.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 59, rank: 80,
    title: "The Annunciation",
    artist: "Fra Angelico",
    year: "c. 1425–1428",
    medium: "Tempera on panel",
    dimensions: "194 × 194 cm",
    description: "Fra Angelico painted multiple versions of the Annunciation. This early version, now in the Prado, was made for the convent of Santo Domenico at Fiesole. The tender meeting of Gabriel and Mary under a loggia, with Adam and Eve's expulsion from Eden at upper left, established the visual language for this subject for generations.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/La_Anunciaci%C3%B3n_de_Fra_Angelico.jpg/330px-La_Anunciaci%C3%B3n_de_Fra_Angelico.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 60, rank: 59,
    title: "The Rokeby Venus",
    artist: "Diego Velázquez",
    year: "c. 1647–1651",
    medium: "Oil on canvas",
    dimensions: "122.5 × 177 cm",
    description: "The only surviving female nude by Velázquez, and one of the few Spanish Baroque nudes. Venus lies on grey silks looking at her reflection held by Cupid. In 1914, suffragette Mary Richardson slashed the painting with a meat cleaver to protest the imprisonment of Emmeline Pankhurst. Restored, the knife marks are still faintly visible.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Diego_Vel%C3%A1zquez_-_Rokeby_Venus.jpg/330px-Diego_Vel%C3%A1zquez_-_Rokeby_Venus.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },

  // ── MUSEO REINA SOFÍA ─────────────────────────────────────────────────────
  {
    id: 61, rank: 10,
    title: "Guernica",
    artist: "Pablo Picasso",
    year: "1937",
    medium: "Oil on canvas",
    dimensions: "349.3 × 776.6 cm",
    description: "The most powerful anti-war painting ever made. Picasso created this in response to the Nazi bombing of the Basque town of Guernica in April 1937. In monochromatic grey, black, and white, fragmented figures — a screaming mother with dead baby, a dying horse, a bull — convey the chaos and agony of modern warfare.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/330px-PicassoGuernica.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },

  // ── UFFIZI GALLERY ────────────────────────────────────────────────────────
  {
    id: 62, rank: 6,
    title: "The Birth of Venus",
    artist: "Sandro Botticelli",
    year: "c. 1484–1486",
    medium: "Tempera on canvas",
    dimensions: "172.5 × 278.9 cm",
    description: "The goddess of love emerges from the sea on a shell, blown by Zephyrus while a figure on shore offers a flowered robe. Commissioned by the Medici, it is one of the first large-scale mythological paintings of the Renaissance. The model is thought to be Simonetta Vespucci, the Medici's favorite beauty.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/330px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 63, rank: 25,
    title: "Primavera (Spring)",
    artist: "Sandro Botticelli",
    year: "c. 1477–1482",
    medium: "Tempera on panel",
    dimensions: "202 × 314 cm",
    description: "A large mythological painting whose precise meaning has been debated for 500 years. Nine figures in an orange grove include Venus, the Three Graces, Mercury, and the Flora figure with flowers emerging from her mouth. Over 500 plant species have been identified — Botticelli may have used a botanical garden reference.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/330px-Botticelli-primavera.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 64, rank: 73,
    title: "Annunciation",
    artist: "Leonardo da Vinci",
    year: "c. 1472–1476",
    medium: "Oil and tempera on wood",
    dimensions: "98 × 217 cm",
    description: "Leonardo's earliest surviving large-scale painting, likely made while still in Verrocchio's workshop. The archangel Gabriel kneels to announce the Incarnation to Mary in a garden. The distant landscape through the marble ledge is the first example of Leonardo's atmospheric perspective — mountains dissolving into mist.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg/330px-Annunciation_%28Leonardo_c._1472%E2%80%931476%29.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 65, rank: 69,
    title: "Judith Slaying Holofernes",
    artist: "Artemisia Gentileschi",
    year: "c. 1614–1620",
    medium: "Oil on canvas",
    dimensions: "199 × 162.5 cm",
    description: "The most forceful version of this biblical subject: Judith and her maid pin down and behead the Assyrian general with a ferocity unprecedented in art. Artemisia, who survived a rape trial, painted this with visceral conviction. It became a feminist touchstone — a woman avenging herself against a man of power.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Judith_Beheading_Holofernes_-_Caravaggio.jpg/500px-Judith_Beheading_Holofernes_-_Caravaggio.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 66, rank: 72,
    title: "Doni Tondo (Holy Family)",
    artist: "Michelangelo",
    year: "c. 1506–1508",
    medium: "Tempera and oil on panel",
    dimensions: "120 cm diameter",
    description: "The only confirmed panel painting by Michelangelo, made for the wealthy Florentine merchant Agnolo Doni. The complex twisting composition of the Holy Family, with nude youths in the background, has never been explained. The original carved frame — also by Michelangelo — is one of the finest surviving Renaissance frames.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Tondo_Doni%2C_por_Miguel_%C3%81ngel.jpg/330px-Tondo_Doni%2C_por_Miguel_%C3%81ngel.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 67, rank: 74,
    title: "The Madonna of the Goldfinch",
    artist: "Raphael",
    year: "c. 1505–1506",
    medium: "Oil on panel",
    dimensions: "107 × 77.2 cm",
    description: "A tender domestic scene: the young Madonna reads while the infant John the Baptist holds out a goldfinch for Jesus to stroke. The goldfinch — symbol of the Passion — gives the painting its name. Damaged by an earthquake in 1547, it was reassembled from 17 fragments, and the repairs are still visible.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Raffaello_Sanzio_-_Madonna_del_Cardellino_-_Google_Art_Project.jpg/330px-Raffaello_Sanzio_-_Madonna_del_Cardellino_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },

  // ── RIJKSMUSEUM ───────────────────────────────────────────────────────────
  {
    id: 68, rank: 9,
    title: "The Night Watch",
    artist: "Rembrandt van Rijn",
    year: "1642",
    medium: "Oil on canvas",
    dimensions: "363 × 437 cm",
    description: "The most famous Dutch Golden Age painting. Captain Frans Banninck Cocq leads his militia company out in a burst of activity and light. Rembrandt broke with the convention of static, evenly-lit group portraits. It was attacked with a bread knife in 1975 and acid in 1990, but all damage has been restored.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg/330px-La_ronda_de_noche%2C_por_Rembrandt_van_Rijn.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 69, rank: 36,
    title: "The Milkmaid",
    artist: "Johannes Vermeer",
    year: "c. 1657–1658",
    medium: "Oil on canvas",
    dimensions: "45.5 × 41 cm",
    description: "A kitchen maid pours milk with quiet concentration — the stream of milk the painting's still center. Vermeer captures the light from a window at left with extraordinary precision, catching it in the loaf of bread, the basket, the earthenware jugs. This small painting is considered his most perfect.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/500px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 70, rank: 46,
    title: "Woman Reading a Letter",
    artist: "Johannes Vermeer",
    year: "c. 1663",
    medium: "Oil on canvas",
    dimensions: "46.5 × 39 cm",
    description: "A pregnant woman stands in soft light reading a letter — almost certainly from her husband away at sea. The wall map behind her shows Holland, connecting his absence with her solitude. Her absorbed concentration, the blue of her jacket, and the pearl of light on her forehead make this one of Vermeer's most meditative works.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Johannes_Vermeer_-_Woman_in_Blue_Reading_a_Letter_-_WGA24657.jpg/500px-Johannes_Vermeer_-_Woman_in_Blue_Reading_a_Letter_-_WGA24657.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 71, rank: 54,
    title: "The Jewish Bride",
    artist: "Rembrandt van Rijn",
    year: "c. 1665–1669",
    medium: "Oil on canvas",
    dimensions: "121.5 × 166.5 cm",
    description: "The identity of the couple remains unknown; they may be the biblical Isaac and Rebecca, or actual patrons. Van Gogh said he would give ten years of his life to sit before this painting for two weeks. The way Rembrandt painted the golden fabric — building the impasto with his hands as much as brushes — is unparalleled.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rembrandt_Harmensz._van_Rijn_-_Portret_van_een_paar_als_oudtestamentische_figuren%2C_genaamd_%27Het_Joodse_bruidje%27_-_Google_Art_Project.jpg/330px-Rembrandt_Harmensz._van_Rijn_-_Portret_van_een_paar_als_oudtestamentische_figuren%2C_genaamd_%27Het_Joodse_bruidje%27_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 72, rank: 63,
    title: "Self-Portrait as the Apostle Paul",
    artist: "Rembrandt van Rijn",
    year: "1661",
    medium: "Oil on canvas",
    dimensions: "91 × 77 cm",
    description: "Rembrandt dressed as St. Paul — sword half-hidden, manuscript in hand, wearing a turban — explores the artist as interpreter and visionary. This is one of his most psychologically profound self-portraits from the late period, when he was aging and financially ruined but producing his greatest work.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Rembrandt_-_Self-Portrait_as_the_Apostle_Paul_-_WGA19222.jpg/500px-Rembrandt_-_Self-Portrait_as_the_Apostle_Paul_-_WGA19222.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 73, rank: 84,
    title: "The Merry Drinker",
    artist: "Frans Hals",
    year: "c. 1628–1630",
    medium: "Oil on canvas",
    dimensions: "81 × 66.5 cm",
    description: "A laughing man raises a glass to us, captured in an instant of jovial connection. Hals's loose, rapid brushwork creates an illusion of spontaneous life unmatched in the 17th century. He could depict the flash of a smile — something no painter before him attempted. Manet called him the greatest painter who ever lived.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Frans_Hals_-_The_Merry_Drinker_-_WGA11095.jpg/330px-Frans_Hals_-_The_Merry_Drinker_-_WGA11095.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },

  // ── MAURITSHUIS ───────────────────────────────────────────────────────────
  {
    id: 74, rank: 5,
    title: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    medium: "Oil on canvas",
    dimensions: "44.5 × 39 cm",
    description: "Often called 'the Mona Lisa of the North,' the girl's sideways glance and parted lips suggest she's about to speak. Her identity remains unknown. The luminous pearl — which may actually be glass or tin — catches the same light as her eyes. Tracy Chevalier's 1999 novel imagined the painting's backstory.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/330px-1665_Girl_with_a_Pearl_Earring.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },
  {
    id: 75, rank: 48,
    title: "View of Delft",
    artist: "Johannes Vermeer",
    year: "c. 1660–1661",
    medium: "Oil on canvas",
    dimensions: "96.5 × 115.7 cm",
    description: "Proust called this 'the most beautiful painting in the world' after fainting in front of it. The city is shown from the south across the River Schie; the Nieuwe Kerk's tower gleams in sunlight while the foreground remains in shadow. The grainy texture of the brickwork and water has been attributed to Vermeer's use of a camera obscura.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vermeer-view-of-delft.jpg/330px-Vermeer-view-of-delft.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },
  {
    id: 76, rank: 35,
    title: "The Anatomy Lesson of Dr. Nicolaes Tulp",
    artist: "Rembrandt van Rijn",
    year: "1632",
    medium: "Oil on canvas",
    dimensions: "169.5 × 216.5 cm",
    description: "Rembrandt's breakthrough commission at age 26. The city's surgeon-general Tulp demonstrates dissection on the corpse of a hanged criminal before seven observers. Unlike static guild portraits, Rembrandt created dynamic triangular compositions and genuine psychological engagement. It established him as Amsterdam's leading portraitist.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/330px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },

  // ── VAN GOGH MUSEUM ───────────────────────────────────────────────────────
  {
    id: 77, rank: 49,
    title: "Wheatfield with Crows",
    artist: "Vincent van Gogh",
    year: "1890",
    medium: "Oil on canvas",
    dimensions: "50.5 × 103 cm",
    description: "Long thought to be Van Gogh's final painting, made in the last weeks of his life in Auvers-sur-Oise. The stormy sky, crows flying in from the sides, and the path that ends in the middle of the field have been read as intimations of death. Recent scholarship suggests it was not actually his last painting.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg/330px-Korenveld_met_kraaien_-_s0149V1962_-_Van_Gogh_Museum.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 78, rank: 53,
    title: "The Potato Eaters",
    artist: "Vincent van Gogh",
    year: "1885",
    medium: "Oil on canvas",
    dimensions: "82 × 114 cm",
    description: "Van Gogh's first major work, made in Nuenen. A peasant family eats potatoes by lamplight — their dark, earthy faces and knotted hands mirror the potatoes they eat. Van Gogh wrote: 'These people, eating their potatoes in the lamplight, have dug the earth with those very hands they put in the dish.' He considered it his masterpiece of this period.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg/330px-Van-willem-vincent-gogh-die-kartoffelesser-03850.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 79, rank: 81,
    title: "Almond Blossom",
    artist: "Vincent van Gogh",
    year: "1890",
    medium: "Oil on canvas",
    dimensions: "73.3 × 92.4 cm",
    description: "Painted to celebrate the birth of his nephew and namesake, Vincent Willem van Gogh. The blue sky behind white and pink almond branches was inspired by Japanese woodblock prints. It was the only painting that Van Gogh's sister-in-law Jo kept in her bedroom after his death, and it remained in the family for decades.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/500px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 80, rank: 82,
    title: "The Bedroom",
    artist: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on canvas",
    dimensions: "72.4 × 91.3 cm",
    description: "Van Gogh painted his bedroom at the Yellow House in Arles three times. This first version (Van Gogh Museum) was made to convey rest and peace — 'Color is to do everything; by its simplification giving a grander style to things, suggesting rest or sleep in general.' The distorted perspective has been attributed to the influence of Japanese prints.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg/500px-La_Chambre_%C3%A0_Arles%2C_by_Vincent_van_Gogh%2C_from_C2RMF.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },

  // ── NATIONAL GALLERY (London) ─────────────────────────────────────────────
  {
    id: 81, rank: 13,
    title: "The Arnolfini Portrait",
    artist: "Jan van Eyck",
    year: "1434",
    medium: "Oil on oak panel",
    dimensions: "82.2 × 60 cm",
    description: "One of the most complex and discussed paintings in Western art. The convex mirror on the back wall reflects the whole room from behind, including two additional figures — one possibly van Eyck himself. The Latin inscription above the mirror reads: 'Jan van Eyck was here. 1434.' Is it a wedding? A betrothal? We don't know.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/The_Arnolfini_portrait_%281434%29.jpg/330px-The_Arnolfini_portrait_%281434%29.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 82, rank: 29,
    title: "The Hay Wain",
    artist: "John Constable",
    year: "1821",
    medium: "Oil on canvas",
    dimensions: "130.2 × 185.4 cm",
    description: "A hay wain (cart) crosses the River Stour at Flatford Mill in Suffolk. Exhibited at the Paris Salon in 1824, it caused a sensation — Delacroix reportedly repainted the background of his Massacre at Chios after seeing the freshness of Constable's greens and whites. Voted Britain's favorite painting multiple times.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/330px-John_Constable_-_The_Hay_Wain_%281821%29.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 83, rank: 37,
    title: "Sunflowers",
    artist: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on canvas",
    dimensions: "92.1 × 73 cm",
    description: "One of five versions Van Gogh painted of sunflowers. He made them to decorate the Yellow House in Arles for the arrival of Gauguin. 'To express scorching love by the radiance of yellow,' he wrote. This version, in London, was acquired in 1924 and is considered the finest. Another version at Christie's sold for $39.9 million in 1987.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/330px-Vincent_Willem_van_Gogh_127.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 84, rank: 42,
    title: "The Ambassadors",
    artist: "Hans Holbein the Younger",
    year: "1533",
    medium: "Oil on oak",
    dimensions: "207 × 209.5 cm",
    description: "Two wealthy French diplomats flank a table of instruments symbolizing their intellectual and diplomatic power. At the bottom, an elongated smear resolves into a human skull when viewed from a steep angle — a memento mori (reminder of death) hidden in a political portrait. The green damask curtain at top-left conceals a crucifix.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg/330px-Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 85, rank: 56,
    title: "The Virgin of the Rocks",
    artist: "Leonardo da Vinci",
    year: "c. 1491–1508",
    medium: "Oil on wood",
    dimensions: "189.5 × 120 cm",
    description: "The second of Leonardo's two versions of this mysterious altarpiece, painted for a Milanese confraternity. The Virgin shelters the infant Christ and John the Baptist in a geological fantasy grotto; the angel points to John but the Christ child blesses him. The London version differs subtly but significantly from the Louvre version.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg/330px-Leonardo_Da_Vinci_-_Vergine_delle_Rocce_%28Louvre%29.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },

  // ── TATE MODERN (London) ──────────────────────────────────────────────────
  {
    id: 86, rank: 100,
    title: "Weeping Woman",
    artist: "Pablo Picasso",
    year: "1937",
    medium: "Oil on canvas",
    dimensions: "59.7 × 49.2 cm",
    description: "Painted just weeks after Guernica, the same jagged style fractures a weeping woman's face into sharp angles of grief. The model was photographer Dora Maar, Picasso's lover. Picasso called her 'the weeping woman' throughout their relationship. Stolen from the National Gallery of Victoria in Melbourne in 1986, returned two weeks later.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Rembrandt_A_Weeping_Woman.jpg/500px-Rembrandt_A_Weeping_Woman.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Tate Modern" }
  },

  // ── WALLACE COLLECTION (London) ───────────────────────────────────────────
  {
    id: 87, rank: 55,
    title: "The Laughing Cavalier",
    artist: "Frans Hals",
    year: "1624",
    medium: "Oil on canvas",
    dimensions: "83 × 67.3 cm",
    description: "Despite the nickname — given by a Victorian journalist — the man is not laughing but wearing a self-satisfied smirk, perhaps at a private joke. His lavish lace collar and embroidered sleeve are painted with virtuosic detail. The bold tilt of his hat and upturned moustache exude confidence. One of the great portraits of the 17th century.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Cavalier_soldier_Hals-1624x.jpg/330px-Cavalier_soldier_Hals-1624x.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Wallace Collection" }
  },

  // ── STATE HERMITAGE MUSEUM ────────────────────────────────────────────────
  {
    id: 88, rank: 33,
    title: "Return of the Prodigal Son",
    artist: "Rembrandt van Rijn",
    year: "c. 1661–1669",
    medium: "Oil on canvas",
    dimensions: "262 × 205 cm",
    description: "Rembrandt's final meditation on forgiveness, possibly left unfinished at his death. The kneeling son — worn, shaved, with one sandal lost — presses his face into his father's cloak. The father's gentle hands — one masculine, one feminine, one firm, one caressing — have been interpreted as representing both parents of the human soul. Tolstoy wept in front of it.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Rembrandt_Harmensz._van_Rijn_-_The_Return_of_the_Prodigal_Son.jpg/500px-Rembrandt_Harmensz._van_Rijn_-_The_Return_of_the_Prodigal_Son.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 89, rank: 38,
    title: "The Dance (La Danse)",
    artist: "Henri Matisse",
    year: "1910",
    medium: "Oil on canvas",
    dimensions: "260 × 391 cm",
    description: "Five pink figures dance in a ring against flat red and blue. Commissioned by the Russian industrialist Sergei Shchukin, it shocked audiences at the 1910 Salon d'Automne. Matisse stripped everything to essence: five figures, three colors, one emotion. The dancer at upper left is about to miss the hand of the dancer at upper right — the circle is breaking.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Matissedance.jpg/330px-Matissedance.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 90, rank: 89,
    title: "Madonna Litta",
    artist: "Attributed to Leonardo da Vinci",
    year: "c. 1490–1491",
    medium: "Tempera on canvas",
    dimensions: "42 × 33 cm",
    description: "A deeply intimate Madonna nursing the Christ child, set within two windows showing a daylit landscape. Long attributed to Leonardo, modern scholarship suggests it may be mostly by his pupil Giovanni Antonio Boltraffio. The delicate modeling of the Madonna's face and the landscape behind are typically Leonardesque.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg/330px-Leonardo_da_Vinci_attributed_-_Madonna_Litta.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 91, rank: 98,
    title: "Danaë",
    artist: "Rembrandt van Rijn",
    year: "1636, reworked c. 1643",
    medium: "Oil on canvas",
    dimensions: "185 × 202.5 cm",
    description: "The mythological princess Danaë welcomes a shower of gold (Jupiter in disguise). Rembrandt reworked the face — changing it from his first wife Saskia to his later companion Hendrickje Stoffels. In 1985 an emotionally disturbed visitor splashed acid on it and slashed it twice; a decade of restoration was required.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Rembrandt_Harmensz._van_Rijn_026.jpg/330px-Rembrandt_Harmensz._van_Rijn_026.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },

  // ── ÖSTERREICHISCHE GALERIE BELVEDERE ─────────────────────────────────────
  {
    id: 92, rank: 12,
    title: "The Kiss",
    artist: "Gustav Klimt",
    year: "1907–1908",
    medium: "Oil, gold, and silver leaf on canvas",
    dimensions: "180 × 180 cm",
    description: "A couple embraces on a floral precipice, wrapped in a golden mantle adorned with geometric forms — his rectangular, hers rounded. The faces and hands emerge from the shimmer as the only real flesh. A symbol of total romantic surrender, it became one of the most reproduced images of the 20th century. The model may be Emilie Flöge.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/330px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Österreichische Galerie Belvedere" }
  },

  // ── KUNSTHISTORISCHES MUSEUM ──────────────────────────────────────────────
  {
    id: 93, rank: 43,
    title: "The Tower of Babel",
    artist: "Pieter Bruegel the Elder",
    year: "1563",
    medium: "Oil on panel",
    dimensions: "114 × 155 cm",
    description: "Bruegel painted the biblical Tower of Babel as a contemporary construction site; the model is the Colosseum in Rome. He sets the colossal unfinished structure against a Flemish landscape with tiny human figures below. A second, smaller version is in Rotterdam. The painting is a meditation on human hubris and the failure of great ambitions.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg/330px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project_-_edited.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Kunsthistorisches Museum" }
  },

  // ── NATIONAL MUSEUM OF NORWAY ─────────────────────────────────────────────
  {
    id: 94, rank: 4,
    title: "The Scream",
    artist: "Edvard Munch",
    year: "1893",
    medium: "Oil, tempera, and pastel on cardboard",
    dimensions: "91 × 73.5 cm",
    description: "The original oil/tempera version, now at the National Museum of Norway (opened 2022; previously at the old National Gallery). Munch wrote in his diary: 'I was walking along the road with two friends — the sun was setting — suddenly the sky turned blood red … I sensed an infinite scream passing through nature.' The face is not screaming but recoiling from a scream in nature itself.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/330px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    location: { continent: "Europe", country: "Norway", city: "Oslo", museum: "National Museum of Norway" }
  },

  // ── VATICAN MUSEUMS ───────────────────────────────────────────────────────
  {
    id: 95, rank: 7,
    title: "The Creation of Adam",
    artist: "Michelangelo",
    year: "c. 1508–1512",
    medium: "Fresco",
    dimensions: "280 × 570 cm",
    description: "The ninth scene of the Sistine Chapel ceiling, showing God and Adam reaching toward each other with almost-touching fingers. The space between those fingers is one of the most famous gaps in art history. God's cloak billows around a brain-like shape; scholars have noted that the figures inside may represent areas of the human brain.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/330px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    location: { continent: "Europe", country: "Vatican City", city: "Vatican City", museum: "Vatican Museums (Sistine Chapel)" }
  },
  {
    id: 96, rank: 22,
    title: "The School of Athens",
    artist: "Raphael",
    year: "1509–1511",
    medium: "Fresco",
    dimensions: "500 × 770 cm",
    description: "Raphael's tribute to classical philosophy fills a lunette in the Vatican's Stanza della Segnatura. Plato (pointing up, modeled on Leonardo) and Aristotle (pointing down) anchor the composition. Every major ancient philosopher is present; Heraclitus (center-left) is modeled on Michelangelo. Raphael included himself at far right.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/330px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    location: { continent: "Europe", country: "Vatican City", city: "Vatican City", museum: "Vatican Museums (Apostolic Palace)" }
  },

  // ── SANTA MARIA DELLE GRAZIE (Milan) ──────────────────────────────────────
  {
    id: 97, rank: 3,
    title: "The Last Supper",
    artist: "Leonardo da Vinci",
    year: "c. 1495–1498",
    medium: "Tempera and oil on plaster",
    dimensions: "460 × 880 cm",
    description: "Painted on the refectory wall of a Milan convent, this is not a true fresco — Leonardo used tempera on dry plaster to allow reworking, but this caused rapid deterioration. It shows the moment Christ announces his betrayal; the apostles react in distinct emotional groups. It has been restored multiple times and suffered bombing in WWII (the wall survived).",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/330px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
    location: { continent: "Europe", country: "Italy", city: "Milan", museum: "Santa Maria delle Grazie" }
  },

  // ── SAN LUIGI DEI FRANCESI (Rome) ─────────────────────────────────────────
  {
    id: 98, rank: 32,
    title: "The Calling of Saint Matthew",
    artist: "Caravaggio",
    year: "1599–1600",
    medium: "Oil on canvas",
    dimensions: "322 × 340 cm",
    description: "A shaft of light from the right (where Christ stands) falls across a group of men at a tax table. Matthew points to himself in disbelief — is it really me being called? Caravaggio uses the harsh chiaroscuro of a street scene rather than any heavenly glow. The painting hangs in the Contarelli Chapel of the French national church in Rome and is free to visit.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg/330px-Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "San Luigi dei Francesi" }
  },

  // ── GALLERIA BORGHESE (Rome) ──────────────────────────────────────────────
  {
    id: 99, rank: 83,
    title: "Sacred and Profane Love",
    artist: "Titian",
    year: "c. 1514",
    medium: "Oil on canvas",
    dimensions: "118 × 279 cm",
    description: "Two women flank a fountain — one clothed and earthly, one nude and divine, with a naked Cupid between them. Despite the name (coined in the 18th century), which figure represents sacred and which profane is deliberately ambiguous. The real subject may be two aspects of the same ideal, debated since the Italian Renaissance.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Amor_sacro_e_amor_profano_02.jpg/330px-Amor_sacro_e_amor_profano_02.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "Galleria Borghese" }
  },

  // ── GEMÄLDEGALERIE ALTE MEISTER (Dresden) ─────────────────────────────────
  {
    id: 100, rank: 58,
    title: "Sistine Madonna",
    artist: "Raphael",
    year: "1512",
    medium: "Oil on canvas",
    dimensions: "265 × 196 cm",
    description: "The Virgin Mary steps from a parted cloud holding the Christ child, flanked by Saint Sixtus and Saint Barbara. The two cherubs (putti) at the bottom, resting their chins on their hands and looking upward, have become the most reproduced detail in art history — appearing on countless mugs, calendars, and gifts worldwide. Raphael painted this for the monks of Piacenza.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg/330px-RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg",
    location: { continent: "Europe", country: "Germany", city: "Dresden", museum: "Gemäldegalerie Alte Meister" }
  }
];

// Derive unique museums with metadata
const MUSEUMS = {};
PAINTINGS.forEach(p => {
  const key = p.location.museum;
  if (!MUSEUMS[key]) {
    MUSEUMS[key] = {
      name: key,
      continent: p.location.continent,
      country: p.location.country,
      city: p.location.city,
      paintings: []
    };
  }
  MUSEUMS[key].paintings.push(p.id);
});

// Continents list
const CONTINENTS = [...new Set(PAINTINGS.map(p => p.location.continent))].sort();
