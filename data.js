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
    movement: "Italian Renaissance",
    wikiUrl: "https://en.wikipedia.org/wiki/Mona_Lisa",
    grokUrl: "https://grokipedia.com/page/Mona_Lisa",
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
    movement: "Romanticism",
    wikiUrl: "https://en.wikipedia.org/wiki/Liberty_Leading_the_People",
    grokUrl: "https://grokipedia.com/page/Liberty_Leading_the_People",
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
    movement: "Romanticism",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Raft_of_the_Medusa",
    grokUrl: "https://grokipedia.com/page/The_Raft_of_the_Medusa",
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
    movement: "Italian Renaissance",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Wedding_at_Cana_(Veronese)",
    grokUrl: "https://grokipedia.com/page/The_Wedding_at_Cana",
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
    movement: "Neoclassicism",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Coronation_of_Napoleon",
    grokUrl: "https://grokipedia.com/page/The_Coronation_of_Napoleon",
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
    movement: "Neoclassicism",
    wikiUrl: "https://en.wikipedia.org/wiki/Oath_of_the_Horatii",
    grokUrl: "https://grokipedia.com/page/Oath_of_the_Horatii",
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
    movement: "Dutch Golden Age",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Lacemaker_(Vermeer)",
    grokUrl: "https://grokipedia.com/page/The_Lacemaker",
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
    movement: "Italian Renaissance",
    wikiUrl: "https://en.wikipedia.org/wiki/Virgin_of_the_Rocks",
    grokUrl: "https://grokipedia.com/page/Virgin_of_the_Rocks",
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
    movement: "Italian Renaissance",
    wikiUrl: "https://en.wikipedia.org/wiki/Portrait_of_Baldassare_Castiglione",
    grokUrl: "https://grokipedia.com/page/Portrait_of_Baldassare_Castiglione",
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
    movement: "Italian Renaissance",
    wikiUrl: "https://en.wikipedia.org/wiki/The_Virgin_and_Child_with_Saint_Anne_(Leonardo)",
    grokUrl: "https://grokipedia.com/page/The_Virgin_and_Child_with_Saint_Anne",
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
    movement: "Realism",
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
    movement: "Realism",
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
    movement: "Realism",
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
    movement: "Impressionism",
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
    movement: "Realism",
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
    movement: "Realism",
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
    movement: "Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Impressionism",
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
    movement: "Impressionism",
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
    movement: "Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Surrealism",
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
    movement: "Cubism",
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
    movement: "Modernism",
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
    movement: "Pop Art",
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
    movement: "Modernism",
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
    movement: "Modernism",
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
    movement: "Cubism",
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
    movement: "Romanticism",
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
    movement: "Baroque",
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
    movement: "Neoclassicism",
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
    movement: "Baroque",
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
    movement: "Post-Impressionism",
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
    movement: "Dutch Golden Age",
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
    movement: "Post-Impressionism",
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
    movement: "Modernism",
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
    movement: "Modernism",
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
    movement: "Post-Impressionism",
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
    movement: "Impressionism",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Italian Renaissance",
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
    movement: "Impressionism",
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
    movement: "Art Nouveau",
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
    movement: "Post-Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Rococo",
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
    movement: "Surrealism",
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
    movement: "Baroque",
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
    movement: "Northern Renaissance",
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
    movement: "Romanticism",
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
    movement: "Romanticism",
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
    movement: "Northern Renaissance",
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
    movement: "Baroque",
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
    movement: "Italian Renaissance",
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
    movement: "Baroque",
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
    movement: "Cubism",
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
    movement: "Italian Renaissance",
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
    movement: "Italian Renaissance",
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
    movement: "Italian Renaissance",
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
    movement: "Baroque",
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
    movement: "Italian Renaissance",
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
    movement: "Italian Renaissance",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Post-Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Post-Impressionism",
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
    movement: "Northern Renaissance",
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
    movement: "Romanticism",
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
    movement: "Post-Impressionism",
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
    movement: "Northern Renaissance",
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
    movement: "Italian Renaissance",
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
    movement: "Cubism",
    imageUrl: null, // 1937 Picasso — under copyright
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
    movement: "Dutch Golden Age",
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
    movement: "Dutch Golden Age",
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
    movement: "Fauvism",
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
    movement: "Italian Renaissance",
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
    movement: "Dutch Golden Age",
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
    movement: "Art Nouveau",
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
    movement: "Northern Renaissance",
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
    movement: "Expressionism",
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
    movement: "Italian Renaissance",
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
    movement: "Italian Renaissance",
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
    movement: "Italian Renaissance",
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
    movement: "Baroque",
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
    movement: "Italian Renaissance",
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
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg/330px-RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg",
    location: { continent: "Europe", country: "Germany", city: "Dresden", museum: "Gemäldegalerie Alte Meister" }
  },

  // ══════════════════════════════════════════════════════════════════════════
  // MUSEUM COLLECTION PAINTINGS — not in the Top 100 ranking
  // ══════════════════════════════════════════════════════════════════════════

  // ── MUSEUM OF MODERN ART (MoMA) ───────────────────────────────────────────
  {
    id: 101, rank: null, museumOnly: true,
    title: "Number 31",
    artist: "Jackson Pollock",
    year: "1950",
    medium: "Enamel on canvas",
    dimensions: "270 × 531 cm",
    description: "One of Pollock's largest and most celebrated drip paintings, created at the height of his Action Painting period. Working on canvas laid on the floor, Pollock poured and flung enamel in dense, layered webs of black, white, and gray. It is one of the defining works of Abstract Expressionism.",
    movement: "Abstract Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Regarding_One.jpg/500px-Regarding_One.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },
  {
    id: 102, rank: null, museumOnly: true,
    title: "The False Mirror",
    artist: "René Magritte",
    year: "1929",
    medium: "Oil on canvas",
    dimensions: "54 × 81 cm",
    description: "A large human eye whose iris has been replaced by a cloudy blue sky. The pupil at center becomes a void or eclipse. Magritte questioned the reliability of vision — the eye that appears to see is itself a window onto an imagined world, making it a 'false mirror.' MoMA acquired it in 1936.",
    movement: "Surrealism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/1/11/The_False_Mirror.jpg/330px-The_False_Mirror.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Museum of Modern Art (MoMA)" }
  },

  // ── MUSEO DEL PRADO ───────────────────────────────────────────────────────
  {
    id: 103, rank: null, museumOnly: true,
    title: "The Naked Maja",
    artist: "Francisco Goya",
    year: "c. 1797–1800",
    medium: "Oil on canvas",
    dimensions: "97 × 190 cm",
    description: "One of the first Western paintings to depict a nude woman with pubic hair, displayed without mythological pretext. Goya painted a clothed version (La Maja Vestida) as a cover to hide it. It caused a scandal and led to Goya's summons by the Spanish Inquisition. The sitter's identity remains unknown.",
    movement: "Romanticism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Goya_Maja_naga2.jpg/330px-Goya_Maja_naga2.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 104, rank: null, museumOnly: true,
    title: "Las Hilanderas (The Spinners)",
    artist: "Diego Velázquez",
    year: "c. 1655–1660",
    medium: "Oil on canvas",
    dimensions: "220 × 289 cm",
    description: "Once thought to be a simple genre scene of a royal tapestry workshop, scholars now read it as a complex allegory of the myth of Arachne. The foreground spinners are the Fates; the brightly lit background tableau enacts Athena's punishment of Arachne. It is Velázquez's most intellectually layered late work.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Velazquez-las_hilanderas.jpg/330px-Velazquez-las_hilanderas.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },

  // ── METROPOLITAN MUSEUM OF ART ────────────────────────────────────────────
  {
    id: 105, rank: null, museumOnly: true,
    title: "Portrait of Madame X",
    artist: "John Singer Sargent",
    year: "1883–1884",
    medium: "Oil on canvas",
    dimensions: "235 × 110 cm",
    description: "A society portrait of Virginie Amélie Avegno Gautreau, an American expatriate known for her beauty, rendered in a stark black dress with an insolently turned face and pale, luminous skin. When exhibited in Paris in 1884 the original low-cut strap scandalized the Salon. Sargent repainted it but the damage to his career sent him to London.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg/330px-Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 106, rank: null, museumOnly: true,
    title: "Portrait of Gertrude Stein",
    artist: "Pablo Picasso",
    year: "1905–1906",
    medium: "Oil on canvas",
    dimensions: "100 × 81 cm",
    description: "Picasso made Gertrude Stein sit for over 80 sessions, then repainted the face after encountering Iberian masks. The masklike, flattened face prefigures Cubism by a year. When critics said the portrait looked nothing like her, Picasso replied: 'It will.' Stein bequeathed it to the Met on her death in 1946.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/GertrudeStein.JPG/330px-GertrudeStein.JPG",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 107, rank: null, museumOnly: true,
    title: "The Harvesters",
    artist: "Pieter Bruegel the Elder",
    year: "1565",
    medium: "Oil on wood panel",
    dimensions: "119 × 162 cm",
    description: "Part of Bruegel's series on the Months, this panoramic summer scene shows peasants resting under a pear tree while others work the wheat-covered hillside. It is one of the earliest pure landscape paintings without a biblical or mythological subject, and one of five surviving panels from the series.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg/330px-Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },
  {
    id: 108, rank: null, museumOnly: true,
    title: "Self-Portrait with Straw Hat",
    artist: "Vincent van Gogh",
    year: "1887",
    medium: "Oil on cardboard",
    dimensions: "40 × 32 cm",
    description: "One of Van Gogh's finest self-portraits, painted in Paris during his immersion in Impressionism. The broken brushwork and vivid complementary colors — orange beard against blue-green background — show his rapid absorption of the new movement. He completed over 35 self-portraits between 1886 and 1889.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Van_Gogh_Self-Portrait_with_Straw_Hat_1887-Metropolitan.jpg/330px-Van_Gogh_Self-Portrait_with_Straw_Hat_1887-Metropolitan.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Metropolitan Museum of Art" }
  },

  // ── UFFIZI GALLERY ────────────────────────────────────────────────────────
  {
    id: 109, rank: null, museumOnly: true,
    title: "Venus of Urbino",
    artist: "Titian",
    year: "1538",
    medium: "Oil on canvas",
    dimensions: "119 × 165 cm",
    description: "A reclining nude of extraordinary sensuality, this Venus gazes directly at the viewer with unsettling confidence. She holds roses and a myrtle sprig — symbols of love and fidelity — while servants arrange a dowry chest in the background. Manet's Olympia (1863) is a direct response to this painting's provocative directness.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg/330px-Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 110, rank: null, museumOnly: true,
    title: "Adoration of the Magi",
    artist: "Leonardo da Vinci",
    year: "1481 (unfinished)",
    medium: "Oil and tempera on panel",
    dimensions: "243 × 246 cm",
    description: "Leonardo abandoned this monumental commission before completing it when he left Florence for Milan. The swirling crowd of figures around the Virgin and Child — including what may be Leonardo's own portrait at far right — anticipates the dynamic compositions of the High Renaissance. It remains one of the most studied unfinished works in art history.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Adoration_of_the_Magi_%28Leonardo%29.jpg/330px-Adoration_of_the_Magi_%28Leonardo%29.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 111, rank: null, museumOnly: true,
    title: "Bacchus",
    artist: "Caravaggio",
    year: "c. 1596",
    medium: "Oil on canvas",
    dimensions: "98 × 85 cm",
    description: "A sensual adolescent Bacchus, god of wine, reclines and offers a glass to the viewer. The carafe reflects Caravaggio's studio and a tiny self-portrait. The fruit shows signs of rot — a Dutch-style memento mori. X-ray analysis revealed a self-portrait of Caravaggio in the upper-left corner, painted over.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Baco%2C_por_Caravaggio.jpg/330px-Baco%2C_por_Caravaggio.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },
  {
    id: 112, rank: null, museumOnly: true,
    title: "Diptych of the Duke and Duchess of Urbino",
    artist: "Piero della Francesca",
    year: "c. 1472–1474",
    medium: "Tempera on panel",
    dimensions: "47 × 66 cm (both panels)",
    description: "Federico da Montefeltro and his wife Battista Sforza are shown in profile against a luminous landscape — an innovation imported from Flemish portraiture. Federico's nose was once straight; it was broken in a tournament and his right eye lost. Piero always painted him from the left. Battista had died before the painting's completion.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Piero_della_Francesca_044.jpg/330px-Piero_della_Francesca_044.jpg",
    location: { continent: "Europe", country: "Italy", city: "Florence", museum: "Uffizi Gallery" }
  },

  // ── RIJKSMUSEUM ───────────────────────────────────────────────────────────
  {
    id: 113, rank: null, museumOnly: true,
    title: "The Love Letter",
    artist: "Johannes Vermeer",
    year: "c. 1669–1670",
    medium: "Oil on canvas",
    dimensions: "44 × 39 cm",
    description: "A maid delivers a letter to her mistress, who pauses from playing a cittern to receive it. We view the scene through a darkened doorway — Vermeer's signature device of spatial mystery. The seascape painting on the wall and the cittern signal themes of love and communication, and the maid's expression reveals that such letters are nothing new.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Johannes_Vermeer_-_%27De_liefdesbrief%27_-_Google_Art_Project.jpg/330px-Johannes_Vermeer_-_%27De_liefdesbrief%27_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 114, rank: null, museumOnly: true,
    title: "The Little Street",
    artist: "Johannes Vermeer",
    year: "c. 1657–1658",
    medium: "Oil on canvas",
    dimensions: "54 × 44 cm",
    description: "One of only two surviving Vermeer cityscapes, this intimate view of a Delft alley captures ordinary life with extraordinary stillness — a woman sewing in a doorway, children playing, another woman scrubbing in the passage. Recent research identified the building as a real almshouse on Vlamingstraat, demolished in 1661.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Johannes_Vermeer_-_Gezicht_op_huizen_in_Delft%2C_bekend_als_%27Het_straatje%27_-_Google_Art_Project.jpg/330px-Johannes_Vermeer_-_Gezicht_op_huizen_in_Delft%2C_bekend_als_%27Het_straatje%27_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 115, rank: null, museumOnly: true,
    title: "The Merry Family",
    artist: "Jan Steen",
    year: "1668",
    medium: "Oil on canvas",
    dimensions: "111 × 141 cm",
    description: "Three generations of a Dutch family eat, drink, smoke, and make music in boisterous disorder. The banner reads 'As the old sing, so twitter the young' — a Dutch proverb warning that children learn bad habits from parents. Steen, who ran a brewery and tavern, depicted moral chaos with gleeful irony.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Jan_Steen_005.jpg/330px-Jan_Steen_005.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },
  {
    id: 116, rank: null, museumOnly: true,
    title: "The Syndics (De Staalmeesters)",
    artist: "Rembrandt van Rijn",
    year: "1662",
    medium: "Oil on canvas",
    dimensions: "191 × 279 cm",
    description: "Five sampling officials of the Amsterdam drapers' guild pause as if interrupted by the viewer's arrival — a stroke of compositional genius that creates an illusion of live interaction. Rembrandt was 56 and at the height of his powers. The man standing at center-left was added at a late stage, making the grouping asymmetrical and more dynamic.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Rembrandt_-_De_Staalmeesters-_het_college_van_staalmeesters_%28waardijns%29_van_het_Amsterdamse_lakenbereidersgilde_-_Google_Art_Project.jpg/330px-Rembrandt_-_De_Staalmeesters-_het_college_van_staalmeesters_%28waardijns%29_van_het_Amsterdamse_lakenbereidersgilde_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Rijksmuseum" }
  },

  // ── ART INSTITUTE OF CHICAGO ──────────────────────────────────────────────
  {
    id: 117, rank: null, museumOnly: true,
    title: "The Old Guitarist",
    artist: "Pablo Picasso",
    year: "1903–1904",
    medium: "Oil on panel",
    dimensions: "122 × 83 cm",
    description: "A gaunt, blind old man bends over his guitar on a street in Barcelona, painted during Picasso's Blue Period following the suicide of his close friend Carlos Casagemas. The monochromatic blue conveys extreme melancholy. X-ray examination revealed a woman and child beneath the guitarist — a memory of a different composition.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Old_guitarist_chicago.jpg/330px-Old_guitarist_chicago.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 118, rank: null, museumOnly: true,
    title: "The Child's Bath",
    artist: "Mary Cassatt",
    year: "1893",
    medium: "Oil on canvas",
    dimensions: "100 × 66 cm",
    description: "A woman tenderly washes a child's feet in a basin, depicted from a radical high vantage point that flattens perspective in the manner of Japanese woodblock prints. Cassatt, the only American in the French Impressionist circle, focused her career on domestic scenes of women and children. This is considered her masterpiece.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg/330px-Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 119, rank: null, museumOnly: true,
    title: "Stacks of Wheat (End of Summer)",
    artist: "Claude Monet",
    year: "1890–1891",
    medium: "Oil on canvas",
    dimensions: "60 × 100 cm",
    description: "One of Monet's most celebrated series, in which he painted the same haystacks in his Giverny fields under different light conditions — dawn, midday, foggy, twilight, snowy. The AIC holds the finest group of the 25 surviving canvases. Critics who had dismissed Monet's series method reversed their view after seeing these together in 1891.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg/330px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_1985.1103_-_Art_Institute_of_Chicago.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 120, rank: null, museumOnly: true,
    title: "Bathers by a River",
    artist: "Henri Matisse",
    year: "1909–1916",
    medium: "Oil on canvas",
    dimensions: "260 × 392 cm",
    description: "Matisse reworked this large canvas over seven years, transforming it from a pastoral Arcadian scene into one of the most severe and geometric paintings of his career. The influence of Cubism (which he resisted but could not ignore) pushed the four bathers toward abstraction. It is one of his most important transitional works.",
    movement: "Fauvism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bathers_by_a_River.jpg/330px-Bathers_by_a_River.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },
  {
    id: 121, rank: null, museumOnly: true,
    title: "The Herring Net",
    artist: "Winslow Homer",
    year: "1885",
    medium: "Oil on canvas",
    dimensions: "76 × 122 cm",
    description: "Two fishermen haul a net on a heaving gray sea, their small dory dwarfed by waves. Homer painted this after two years in a Northumberland fishing village, which transformed his work from illustrator of American genre scenes to painter of elemental struggles between humans and nature. The faceless, anonymous men convey universal labor.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Winslow_Homer_-_The_Herring_Net_-_Google_Art_Project.jpg/330px-Winslow_Homer_-_The_Herring_Net_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Chicago", museum: "Art Institute of Chicago" }
  },

  // ── NATIONAL GALLERY (LONDON) ─────────────────────────────────────────────
  {
    id: 122, rank: null, museumOnly: true,
    title: "The Fighting Temeraire",
    artist: "J.M.W. Turner",
    year: "1839",
    medium: "Oil on canvas",
    dimensions: "91 × 122 cm",
    description: "A ghostly white warship that fought at Trafalgar is towed by a small, fire-bellied steam tugboat toward its final berth to be broken up. Turner paints the old ship luminous and enormous, the tug dark and squat — a meditation on heroism, obsolescence, and death. In 2005, it was voted the Greatest Painting in Britain.",
    movement: "Romanticism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/330px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 123, rank: null, museumOnly: true,
    title: "Mr and Mrs Andrews",
    artist: "Thomas Gainsborough",
    year: "c. 1750",
    medium: "Oil on canvas",
    dimensions: "70 × 119 cm",
    description: "A newly married Suffolk couple pose in their estate: Robert Andrews stands casually, gun under arm and dog at his feet; Frances sits on a bench. The vast agricultural landscape behind them, stretching to a luminous sky, is as much a statement of land ownership as a wedding portrait. Frances's lap curiously holds an unfinished area — possibly meant for a baby.",
    movement: "Rococo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thomas_Gainsborough_-_Mr_and_Mrs_Andrews.jpg/330px-Thomas_Gainsborough_-_Mr_and_Mrs_Andrews.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 124, rank: null, museumOnly: true,
    title: "Venus and Mars",
    artist: "Sandro Botticelli",
    year: "c. 1485",
    medium: "Tempera and oil on panel",
    dimensions: "69 × 174 cm",
    description: "Mars, god of war, sleeps in a deep post-coital slumber while Venus, goddess of love, watches alert and composed. Infant satyrs play with his armor — his power disarmed. The panel's extreme horizontal format suggests it decorated a chest or headboard for a Medici wedding. Wasps in the upper corner may encode the Vespucci family crest.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Venus_and_Mars_National_Gallery.jpg/330px-Venus_and_Mars_National_Gallery.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 125, rank: null, museumOnly: true,
    title: "The Supper at Emmaus",
    artist: "Caravaggio",
    year: "1601",
    medium: "Oil and tempera on canvas",
    dimensions: "141 × 196 cm",
    description: "The risen Christ, depicted beardless and youthful, blesses bread at an inn, triggering sudden recognition in two disciples. Their arms thrust outward in astonishment — one reaching toward us, breaking the picture plane. The still life on the table, painted with stunning detail, includes a fruit basket overhanging the edge, casting a real shadow.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Supper_at_Emmaus-Caravaggio_%281601%29.jpg/330px-Supper_at_Emmaus-Caravaggio_%281601%29.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },
  {
    id: 126, rank: null, museumOnly: true,
    title: "Self-Portrait at the Age of 34",
    artist: "Rembrandt van Rijn",
    year: "1640",
    medium: "Oil on canvas",
    dimensions: "93 × 80 cm",
    description: "Rembrandt presents himself in elegant Renaissance dress, his arm resting on a ledge — a pose borrowed directly from Raphael's portrait of Baldassare Castiglione (which Rembrandt had sketched at auction that year). It is an act of deliberate self-elevation, claiming kinship with the Old Masters, painted at the peak of his commercial success.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Rembrandt%2C_Self_Portrait_at_the_Age_of_34.jpg/330px-Rembrandt%2C_Self_Portrait_at_the_Age_of_34.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "National Gallery" }
  },

  // ── VAN GOGH MUSEUM ───────────────────────────────────────────────────────
  {
    id: 127, rank: null, museumOnly: true,
    title: "Sunflowers",
    artist: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "95 × 73 cm",
    description: "The fourth and final version of Van Gogh's sunflower series, with a turquoise background unique among the series. He painted sunflowers to decorate Gauguin's room at the Yellow House in Arles, viewing them as symbols of gratitude and devotion. This version was made as a copy after the two artists' catastrophic falling out.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_Willem_van_Gogh_128.jpg/330px-Vincent_Willem_van_Gogh_128.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 128, rank: null, museumOnly: true,
    title: "The Sower",
    artist: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on canvas",
    dimensions: "64 × 80 cm",
    description: "A peasant sower strides across a plowed field at sunset, the enormous yellow sun behind him dividing the composition diagonally. Inspired by Millet's sower engravings, Van Gogh transformed the subject into a radiant icon of labor and spiritual renewal. He made over 30 drawings and paintings of sowers throughout his career.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Sower_at_Sunset_-_Vincent_Van_Gogh.jpg/330px-Sower_at_Sunset_-_Vincent_Van_Gogh.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 129, rank: null, museumOnly: true,
    title: "Self-Portrait with Grey Felt Hat",
    artist: "Vincent van Gogh",
    year: "1887",
    medium: "Oil on cardboard",
    dimensions: "44 × 38 cm",
    description: "The most celebrated of Van Gogh's Paris self-portraits, showing him in a grey hat against a swirling blue background of short, comma-like brushstrokes. He is experimenting with the Pointillist technique he had just encountered through Seurat and Signac. The intense blue eyes stare with unsettling directness.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Van_Gogh_Self-Portrait_with_Grey_Felt_Hat_1886-87_Rijksmuseum.jpg/330px-Van_Gogh_Self-Portrait_with_Grey_Felt_Hat_1886-87_Rijksmuseum.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 130, rank: null, museumOnly: true,
    title: "The Yellow House (The Street)",
    artist: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on canvas",
    dimensions: "72 × 92 cm",
    description: "Van Gogh's depiction of his rented home in Arles — the right wing of the yellow building — on a blazing Provençal afternoon. He moved here dreaming of founding an artists' community, the Studio of the South. The painting documents the actual house where he invited Gauguin, where their friendship unraveled, and where he severed his own ear.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/330px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 131, rank: null, museumOnly: true,
    title: "Skull of a Skeleton with Burning Cigarette",
    artist: "Vincent van Gogh",
    year: "1886",
    medium: "Oil on canvas",
    dimensions: "33 × 24 cm",
    description: "A skeleton smokes a cigarette in this sardonic student exercise painted while Van Gogh studied anatomy at the Antwerp Academy. It parodies both the memento mori tradition and the self-satisfied bourgeois smokers of Dutch genre painting. One of his earliest oil paintings on canvas and a rare work of dark humor from an artist better known for pathos.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Vincent_van_Gogh_-_Head_of_a_Skeleton_with_a_Burning_Cigarette_-_VGM_F212.jpg/330px-Vincent_van_Gogh_-_Head_of_a_Skeleton_with_a_Burning_Cigarette_-_VGM_F212.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },
  {
    id: 132, rank: null, museumOnly: true,
    title: "Fishing Boats on the Beach at Saintes-Maries",
    artist: "Vincent van Gogh",
    year: "1888",
    medium: "Oil on canvas",
    dimensions: "65 × 82 cm",
    description: "During a three-day trip to the Mediterranean coast, Van Gogh worked in a frenzy, making drawings and this radiant oil of colorful boats on the beach. The flat water, intense blue sky, and bold complementary colors anticipate the expressionist phase to come. He wrote to Theo: 'The Mediterranean has the colors of mackerel — changeable, I mean.'",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/WLANL_-_Minke_Wagenaar_-_Vincent_van_Gogh_1888_Fishing_boats_on_the_beach_at_Les_Saintes-Maries-de-la-Mer.jpg/330px-WLANL_-_Minke_Wagenaar_-_Vincent_van_Gogh_1888_Fishing_boats_on_the_beach_at_Les_Saintes-Maries-de-la-Mer.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "Amsterdam", museum: "Van Gogh Museum" }
  },

  // ── STATE HERMITAGE MUSEUM ────────────────────────────────────────────────
  {
    id: 133, rank: null, museumOnly: true,
    title: "Music",
    artist: "Henri Matisse",
    year: "1910",
    medium: "Oil on canvas",
    dimensions: "260 × 389 cm",
    description: "Commissioned alongside The Dance by Russian collector Sergei Shchukin, this massive canvas shows five flat, crimson figures against green and blue bands representing earth and sky — one playing violin, one double-pipe, three sitting. Where The Dance pulses with movement, Music is profoundly still, a contrast Matisse described as active vs. contemplative.",
    movement: "Fauvism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/La_Musique%2C_par_Henri_Matisse_%281910%29.jpg/330px-La_Musique%2C_par_Henri_Matisse_%281910%29.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 134, rank: null, museumOnly: true,
    title: "The Red Room (Harmony in Red)",
    artist: "Henri Matisse",
    year: "1908",
    medium: "Oil on canvas",
    dimensions: "181 × 221 cm",
    description: "A tablecloth and wallpaper with swirling blue-and-white vine patterns merge seamlessly, collapsing the distinction between surface and space. The entire room glows with saturated red. Also commissioned by Shchukin, it was originally painted in blue (then green) before Matisse demanded to repaint it red. A radical assertion that color creates its own reality.",
    movement: "Fauvism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Henri_Matisse_-_The_Red_Room-1908.jpg/330px-Henri_Matisse_-_The_Red_Room-1908.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 135, rank: null, museumOnly: true,
    title: "The Benois Madonna",
    artist: "Leonardo da Vinci",
    year: "c. 1478–1480",
    medium: "Oil on panel (transferred to canvas)",
    dimensions: "48 × 31 cm",
    description: "One of Leonardo's earliest surviving paintings, showing the young Virgin playing with the Christ child over a flower. The warm, pyramidal composition and the natural, almost playful interaction between mother and child depart radically from the stiff Byzantine and early Renaissance conventions Leonardo had been trained in. The Hermitage acquired it in 1914.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Madonna_benois_01.jpg/330px-Madonna_benois_01.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 136, rank: null, museumOnly: true,
    title: "Portrait of an Old Man in Red",
    artist: "Rembrandt van Rijn",
    year: "c. 1652–1654",
    medium: "Oil on canvas",
    dimensions: "108 × 86 cm",
    description: "An elderly man in a red robe sits in quiet contemplation, his age and dignity rendered with Rembrandt's signature loose, luminous handling of paint. The identity of the sitter is unknown, but the psychological depth — the sense of a whole life behind those eyes — exemplifies why Rembrandt's late portraits are considered the apex of Western portraiture.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Rembrandt_Harmensz._van_Rijn_-_Portrait_of_an_Old_Man_in_Red.jpg/330px-Rembrandt_Harmensz._van_Rijn_-_Portrait_of_an_Old_Man_in_Red.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 137, rank: null, museumOnly: true,
    title: "Woman Picking Fruit",
    artist: "Paul Gauguin",
    year: "1893",
    medium: "Oil on canvas",
    dimensions: "92 × 73 cm",
    description: "A Tahitian woman reaches for tropical fruit in a lush, flattened landscape of bold colors. Painted during Gauguin's first Tahitian stay, it embodies his rejection of European civilization in favor of what he imagined as a primal paradise. The Hermitage holds one of the world's finest Gauguin collections from Shchukin's systematic patronage.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Paul_Gauguin_-_D%27ou_venons-nous.jpg/330px-Paul_Gauguin_-_D%27ou_venons-nous.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },
  {
    id: 138, rank: null, museumOnly: true,
    title: "Portrait of a Young Woman",
    artist: "Sandro Botticelli",
    year: "c. 1480",
    medium: "Tempera on panel",
    dimensions: "61 × 40 cm",
    description: "A young Florentine woman in three-quarter profile looks out with serene self-possession. The elaborate hairstyle with pearls and the precise rendering of her dress are characteristic of Botticelli's portrait commissions for the Medici circle. Her identity has been debated — proposals include Simonetta Vespucci, the unattainable beauty whom Botticelli reportedly loved.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sandro_Botticelli_-_Idealized_Portrait_of_a_Lady_%28Portrait_of_Simonetta_Vespucci_as_Nymph%29_-_Google_Art_Project.jpg/330px-Sandro_Botticelli_-_Idealized_Portrait_of_a_Lady_%28Portrait_of_Simonetta_Vespucci_as_Nymph%29_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Russia", city: "Saint Petersburg", museum: "State Hermitage Museum" }
  },

  // ── NATIONAL GALLERY OF ART (Washington DC) ───────────────────────────────
  {
    id: 139, rank: null, museumOnly: true,
    title: "Portrait of Ginevra de' Benci",
    artist: "Leonardo da Vinci",
    year: "c. 1474–1478",
    medium: "Oil and tempera on panel",
    dimensions: "38 × 37 cm",
    description: "The only Leonardo painting in the Americas. The sixteen-year-old Ginevra de' Benci stares with cool, unsmiling directness — a departure from the feminine idealization of the time. The juniper bush (ginepro) behind her head is a visual pun on her name. The reverse of the panel bears a Latin motto: 'Beauty Adorns Virtue.'",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg/330px-Leonardo_da_Vinci_-_Ginevra_de%27_Benci_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 140, rank: null, museumOnly: true,
    title: "A Lady Writing",
    artist: "Johannes Vermeer",
    year: "c. 1665",
    medium: "Oil on canvas",
    dimensions: "45 × 40 cm",
    description: "A young woman in a yellow jacket trimmed with white fur pauses from writing to look up at the viewer. The interrupted letter and her relaxed, open expression suggest a love letter. The composition is one of Vermeer's most direct — no crowded props, no window shown — just intimate psychological contact across a simple desk.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Lady_Writing_by_Johannes_Vermeer%2C_1665-6.png/330px-A_Lady_Writing_by_Johannes_Vermeer%2C_1665-6.png",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 141, rank: null, museumOnly: true,
    title: "Woman Holding a Balance",
    artist: "Johannes Vermeer",
    year: "c. 1664",
    medium: "Oil on canvas",
    dimensions: "40 × 36 cm",
    description: "A young woman holds a balance scale with empty pans while a painting of the Last Judgment hangs directly behind her — a moralizing juxtaposition linking earthly measurement to divine judgment. The balance appears to hold nothing, suggesting spiritual equilibrium rather than material weighing. X-ray analysis reveals Vermeer added the Last Judgment deliberately.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Johannes_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg/330px-Johannes_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 142, rank: null, museumOnly: true,
    title: "Watson and the Shark",
    artist: "John Singleton Copley",
    year: "1778",
    medium: "Oil on canvas",
    dimensions: "182 × 230 cm",
    description: "A group of sailors in a small boat frantically attempt to rescue a naked young man from the jaws of a shark in Havana harbor. The scene is based on a real 1749 incident: Brook Watson, a 14-year-old orphan, lost his leg to a shark and survived. Watson commissioned this painting as an adult and left it to Christ's Hospital school on his death.",
    movement: "Neoclassicism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Watsonandtheshark-original.jpg/330px-Watsonandtheshark-original.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 143, rank: null, museumOnly: true,
    title: "Adoration of the Magi",
    artist: "Fra Angelico and Fra Filippo Lippi",
    year: "c. 1440–1460",
    medium: "Tempera on panel",
    dimensions: "137 cm diameter",
    description: "A tondo (round painting) of exceptional richness, teeming with figures, horses, and processions wrapping around the circular frame. Begun by Fra Angelico in the convent of San Marco, it was completed by Fra Filippo Lippi after Angelico's death. The NGA has identified over 200 individual figures. It was in the Medici collection for a century.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fra_Angelico%2C_Fra_Filippo_Lippi%2C_The_Adoration_of_the_Magi.jpg/330px-Fra_Angelico%2C_Fra_Filippo_Lippi%2C_The_Adoration_of_the_Magi.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 144, rank: null, museumOnly: true,
    title: "Feast of the Gods",
    artist: "Giovanni Bellini and Titian",
    year: "1514–1529",
    medium: "Oil on canvas",
    dimensions: "170 × 188 cm",
    description: "Painted for Alfonso d'Este's private camerino in Ferrara, this shows the gods feasting from ancient bowls while nymphs and satyrs mingle. Bellini painted it at 84, his last major work. After Bellini's death, Titian repainted the landscape background three times to harmonize with canvases he was adding to the same room.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/FeastofthegodsFXD.jpg/330px-FeastofthegodsFXD.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },
  {
    id: 145, rank: null, museumOnly: true,
    title: "Daniel in the Lions' Den",
    artist: "Peter Paul Rubens",
    year: "c. 1614–1616",
    medium: "Oil on canvas",
    dimensions: "224 × 330 cm",
    description: "Daniel stands calm among seven lions in a dark pit, hands clasped in prayer, while an angel above reassures him. Rubens painted the lions from life at the menagerie of Archduke Albert in Brussels. The animals are rendered with zoological accuracy — their power palpable — making Daniel's serenity all the more remarkable.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sir_Peter_Paul_Rubens_-_Daniel_in_the_Lions%27_Den_-_Google_Art_Project.jpg/330px-Sir_Peter_Paul_Rubens_-_Daniel_in_the_Lions%27_Den_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "National Gallery of Art" }
  },

  // ── MAURITSHUIS ───────────────────────────────────────────────────────────
  {
    id: 146, rank: null, museumOnly: true,
    title: "The Goldfinch",
    artist: "Carel Fabritius",
    year: "1654",
    medium: "Oil on panel",
    dimensions: "33 × 23 cm",
    description: "A tiny goldfinch is chained by its foot to a perch against a white-grey wall, rendered with trompe l'oeil precision. Fabritius, Rembrandt's most gifted pupil, died in the Delft gunpowder explosion the year this was painted. The small scale and intimate intensity suggest it was designed to be hung low and viewed closely. Donna Tartt's 2013 Pulitzer-winning novel took it as its title.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Fabritius-vink.jpg/330px-Fabritius-vink.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },
  {
    id: 147, rank: null, museumOnly: true,
    title: "The Bull",
    artist: "Paulus Potter",
    year: "1647",
    medium: "Oil on canvas",
    dimensions: "236 × 339 cm",
    description: "A monumental life-size bull stands in a meadow, staring at the viewer with forthright frankness. It was the most talked-about painting in 17th-century Europe — celebrated for its unprecedented realism and extraordinary size. Potter was only 22 when he painted it. Napoleon had it transported to Paris as war booty; it required its own custom wagon.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Paulus_Potter_-_The_Bull_-_136_-_Mauritshuis.jpg/330px-Paulus_Potter_-_The_Bull_-_136_-_Mauritshuis.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },
  {
    id: 148, rank: null, museumOnly: true,
    title: "Saul and David",
    artist: "Rembrandt van Rijn",
    year: "c. 1651–1655",
    medium: "Oil on canvas",
    dimensions: "130 × 164 cm",
    description: "Saul, tormented by an evil spirit, listens as young David plays the harp to soothe him. Rembrandt shows Saul raising a curtain to his face — half obscuring himself — in a gesture of ambivalent tenderness and encroaching madness. The spear in his left hand betrays his murderous jealousy. The psychological complexity is extraordinary.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Rembrandt_Saul_and_David.jpg/330px-Rembrandt_Saul_and_David.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },
  {
    id: 149, rank: null, museumOnly: true,
    title: "Diana and Her Nymphs",
    artist: "Peter Paul Rubens",
    year: "c. 1615",
    medium: "Oil on canvas",
    dimensions: "128 × 180 cm",
    description: "The goddess Diana rests with her nymphs after the hunt, surrounded by game and dogs. Rubens, who had just returned from Italy, synthesizes Titian's voluptuous nudes with his own Flemish energy. The cool, silvery light on the flesh tones contrasts with the warm, ruddy dogs and game. The freshness of open-air setting is remarkable.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Peter_Paul_Rubens_-_Diana_and_Callisto_-_WGA20326.jpg/330px-Peter_Paul_Rubens_-_Diana_and_Callisto_-_WGA20326.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },
  {
    id: 150, rank: null, museumOnly: true,
    title: "Vase with Flowers",
    artist: "Jan Davidsz. de Heem",
    year: "c. 1660",
    medium: "Oil on canvas",
    dimensions: "74 × 59 cm",
    description: "An extravagant floral bouquet spilling insects, dewdrops, and decaying petals — flowers from all seasons assembled in a single impossible arrangement. De Heem was the supreme master of Dutch flower painting, spending years in Antwerp to access the finest and rarest specimens. The perfection and decay coexisting in one image make it a meditation on time.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Vase_of_Flowers_painting_by_Jan_Davidsz._de_Heem_Mauritshuis_1099.jpg/330px-Vase_of_Flowers_painting_by_Jan_Davidsz._de_Heem_Mauritshuis_1099.jpg",
    location: { continent: "Europe", country: "Netherlands", city: "The Hague", museum: "Mauritshuis" }
  },

  // ── MARMOTTAN MONET MUSEUM ────────────────────────────────────────────────
  {
    id: 151, rank: null, museumOnly: true,
    title: "The Japanese Bridge",
    artist: "Claude Monet",
    year: "c. 1920–1922",
    medium: "Oil on canvas",
    dimensions: "89 × 93 cm",
    description: "In his final years, nearly blind with cataracts, Monet painted his Japanese bridge at Giverny in increasingly abstract, turbulent strokes. Where earlier versions (at the Met and other museums) show a serene arched bridge in gentle greens, these late canvases are explosive — the bridge barely legible under dense impasto. They anticipated Abstract Expressionism by decades.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Claude_Monet_-_The_Japanese_bridge_-_Google_Art_Project.jpg/330px-Claude_Monet_-_The_Japanese_bridge_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Marmottan Monet Museum" }
  },
  {
    id: 152, rank: null, museumOnly: true,
    title: "Regatta at Argenteuil",
    artist: "Claude Monet",
    year: "1872",
    medium: "Oil on canvas",
    dimensions: "48 × 75 cm",
    description: "Sailboats on the Seine at Argenteuil dissolve in shimmering reflections, their hulls and the sky above them almost indistinguishable in the broken water. Monet moved to Argenteuil in 1871 and spent seven years painting the river's changing light. This early work already shows the full Impressionist vocabulary: broken brushwork, pure color, no outlining.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Claude_Monet_042.jpg/330px-Claude_Monet_042.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Marmottan Monet Museum" }
  },
  {
    id: 153, rank: null, museumOnly: true,
    title: "Charing Cross Bridge, Fog",
    artist: "Claude Monet",
    year: "1903",
    medium: "Oil on canvas",
    dimensions: "73 × 92 cm",
    description: "London's railway bridge dissolves in orange-violet fog, barely distinguishable from the sky and river. Monet made three extended visits to London and produced nearly 100 canvases of the Thames, working on dozens simultaneously to capture different light conditions. 'Without fog, London would not be beautiful,' he said.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Monet_-_Charing_Cross_Bridge_Fog_on_the_Thames%2C_1903.jpg/330px-Monet_-_Charing_Cross_Bridge_Fog_on_the_Thames%2C_1903.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Marmottan Monet Museum" }
  },

  // ── MUSÉE DE L'ORANGERIE ──────────────────────────────────────────────────
  {
    id: 154, rank: null, museumOnly: true,
    title: "Portrait of Paul Guillaume, Novo Pilota",
    artist: "Amedeo Modigliani",
    year: "1915",
    medium: "Oil on cardboard",
    dimensions: "105 × 75 cm",
    description: "Paul Guillaume, the art dealer who championed Modigliani, Soutine, and the École de Paris, is depicted with his characteristic elongated features — almond eyes without pupils, swanlike neck. The inscription 'Novo Pilota' (New Pilot) reflects his role as champion of a new artistic generation. The Orangerie's Paul Guillaume collection is among the finest in France.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Amedeo_Modigliani_%28Livorno_1884_-_Parigi_1920%29_-_Ritratto_di_Paul_Guillaume_%281916%29_Olio_su_tela_81%C3%9754_cm_-_Museo_del_Novecento%2C_Milano.jpg/330px-Amedeo_Modigliani_%28Livorno_1884_-_Parigi_1920%29_-_Ritratto_di_Paul_Guillaume_%281916%29_Olio_su_tela_81%C3%9754_cm_-_Museo_del_Novecento%2C_Milano.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée de l'Orangerie" }
  },
  {
    id: 155, rank: null, museumOnly: true,
    title: "Apples and Biscuits",
    artist: "Paul Cézanne",
    year: "c. 1879–1882",
    medium: "Oil on canvas",
    dimensions: "46 × 55 cm",
    description: "A modest arrangement of apples and a plate of biscuits on a draped surface — yet from such ordinary subjects Cézanne constructed a revolution. The apples are not painted to deceive but to analyze: the viewer sees multiple angles simultaneously, the spatial logic is deliberately skewed, and no apple is the same as another. The Orangerie holds a significant Cézanne group from Paul Guillaume's bequest.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nature_morte_aux_pommes_et_aux_oranges%2C_par_Paul_C%C3%A9zanne.jpg/330px-Nature_morte_aux_pommes_et_aux_oranges%2C_par_Paul_C%C3%A9zanne.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée de l'Orangerie" }
  },

  // ── PHILLIPS COLLECTION ───────────────────────────────────────────────────
  {
    id: 156, rank: null, museumOnly: true,
    title: "The Blue Room",
    artist: "Pablo Picasso",
    year: "1901",
    medium: "Oil on canvas",
    dimensions: "50 × 61 cm",
    description: "A woman bathes in a Parisian studio whose walls are hung with a poster of Toulouse-Lautrec's 'May Milton.' Painted in the early weeks of Picasso's Blue Period, it synthesizes his affection for the Post-Impressionists with an emerging bleaker palette. The Phillips Collection acquired it in 1927 for $9,000 — one of its most prescient early purchases.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Picasso%27s_Blue_Room_1901.jpg/330px-Picasso%27s_Blue_Room_1901.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "Phillips Collection" }
  },
  {
    id: 157, rank: null, museumOnly: true,
    title: "The Repentant Magdalen",
    artist: "Georges de La Tour",
    year: "c. 1640",
    medium: "Oil on canvas",
    dimensions: "113 × 93 cm",
    description: "Mary Magdalen sits alone with a candle, its flame casting the only light in the composition, her hand resting on a skull — meditating on mortality and redemption. La Tour's nocturnal candlelight scenes are among the most meditative in Western art. He was largely forgotten after his death and only rediscovered in the 20th century.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Georges_de_La_Tour_-_Magdalen_of_Night_Light_-_WGA12337.jpg/330px-Georges_de_La_Tour_-_Magdalen_of_Night_Light_-_WGA12337.jpg",
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "Phillips Collection" }
  },
  {
    id: 158, rank: null, museumOnly: true,
    title: "Migration Series, Panel No. 49",
    artist: "Jacob Lawrence",
    year: "1940–1941",
    medium: "Casein tempera on hardboard",
    dimensions: "46 × 31 cm",
    description: "One of 60 panels documenting the Great Migration of African Americans from the rural South to the urban North. Lawrence used flat, simplified shapes and bold colors to tell a collective story of hardship and hope. The series was split between MoMA and the Phillips Collection after Fortune magazine published it in 1941. It is one of the most important American narrative art works.",
    movement: "Modernism",
    imageUrl: null,
    location: { continent: "North America", country: "USA", city: "Washington DC", museum: "Phillips Collection" }
  },

  // ── NEUE GALERIE NEW YORK ─────────────────────────────────────────────────
  {
    id: 159, rank: null, museumOnly: true,
    title: "Portrait of Adele Bloch-Bauer II",
    artist: "Gustav Klimt",
    year: "1912",
    medium: "Oil on canvas",
    dimensions: "190 × 120 cm",
    description: "Klimt's second portrait of Adele Bloch-Bauer depicts her in a simpler, more elegant manner than the gilded first version — a flowing floral dress, a more direct gaze. This painting remained in Nazi possession after the Bloch-Bauer family fled Austria; it was restituted to the family heirs in 2006 and sold at Christies for $87.9 million.",
    movement: "Art Nouveau",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Gustav_Klimt_047.jpg/330px-Gustav_Klimt_047.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Neue Galerie New York" }
  },
  {
    id: 160, rank: null, museumOnly: true,
    title: "Houses in Krumau",
    artist: "Egon Schiele",
    year: "1915–1916",
    medium: "Oil on canvas",
    dimensions: "110 × 140 cm",
    description: "Schiele painted the medieval Bohemian town of Krumau (his mother's birthplace) repeatedly from above, abstracting the tightly packed houses into angular, encrusted forms that seem to press against each other in anxiety. The palette of ochres, greens, and browns creates a landscape of psychological unease. The Neue Galerie holds the premier collection of Vienna 1900 art outside Europe.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Egon_Schiele_-_Krumau_-_Crescent_of_Houses_%28The_small_City_V%29_-_Google_Art_Project.jpg/330px-Egon_Schiele_-_Krumau_-_Crescent_of_Houses_%28The_small_City_V%29_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "New York", museum: "Neue Galerie New York" }
  },

  // ── J. PAUL GETTY MUSEUM ──────────────────────────────────────────────────
  {
    id: 161, rank: null, museumOnly: true,
    title: "La Promenade",
    artist: "Pierre-Auguste Renoir",
    year: "1870",
    medium: "Oil on canvas",
    dimensions: "81 × 65 cm",
    description: "A young couple strolls in a dappled woodland, the woman in a brilliant white dress, the man in dark clothes. Painted the year before the Franco-Prussian War, it captures the ease and leisure of Second Empire Paris. The bold contrasts of sunlight filtering through foliage — flecks of light on the dress — point toward the full Impressionist style Renoir would achieve in the 1870s.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/La_Promenade%2C_by_Pierre-Auguste_Renoir.jpg/330px-La_Promenade%2C_by_Pierre-Auguste_Renoir.jpg",
    location: { continent: "North America", country: "USA", city: "Los Angeles", museum: "J. Paul Getty Museum" }
  },
  {
    id: 162, rank: null, museumOnly: true,
    title: "The Abduction of Europa",
    artist: "Rembrandt van Rijn",
    year: "1632",
    medium: "Oil on panel",
    dimensions: "62 × 77 cm",
    description: "Zeus, disguised as a white bull, carries the Phoenician princess Europa into the sea as her companions reach out in horror from the shore. The water froths around the bull's legs; Europa clutches his horns. At only 26, Rembrandt's command of dramatic narrative, light, and expression was already complete. The Getty acquired it in 1995.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Rembrandt_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg/330px-Rembrandt_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Los Angeles", museum: "J. Paul Getty Museum" }
  },
  {
    id: 163, rank: null, museumOnly: true,
    title: "The Holy Family with the Infant Saint John the Baptist",
    artist: "Nicolas Poussin",
    year: "1655",
    medium: "Oil on canvas",
    dimensions: "97 × 133 cm",
    description: "Poussin's late masterpiece depicts the Holy Family in a serene architectural setting with classical columns. The geometrically ordered composition, cool palette, and philosophical calm define French classical painting. Poussin spent most of his career in Rome and never returned to France, but his influence shaped three centuries of French art and the founding of the Académie.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Nicolas_Poussin_%281594-1665%29_%28attributed_to%29_-_The_Holy_Family_with_the_Infant_Saint_John_-_L.F9.1943.4.0_-_Leicester_Museum_%5E_Art_Gallery.jpg/330px-Nicolas_Poussin_%281594-1665%29_%28attributed_to%29_-_The_Holy_Family_with_the_Infant_Saint_John_-_L.F9.1943.4.0_-_Leicester_Museum_%5E_Art_Gallery.jpg",
    location: { continent: "North America", country: "USA", city: "Los Angeles", museum: "J. Paul Getty Museum" }
  },

  // ── PHILADELPHIA MUSEUM OF ART ────────────────────────────────────────────
  {
    id: 164, rank: null, museumOnly: true,
    title: "Nude Descending a Staircase, No. 2",
    artist: "Marcel Duchamp",
    year: "1912",
    medium: "Oil on canvas",
    dimensions: "147 × 89 cm",
    description: "A figure descends a staircase rendered in successive overlapping positions — a Cubist analysis of movement in time influenced by chronophotography. When shown at the 1913 Armory Show in New York, it caused a national scandal and made Duchamp famous. Theodore Roosevelt declared it looked like 'an explosion in a shingle factory.'",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c0/Duchamp_-_Nude_Descending_a_Staircase.jpg/330px-Duchamp_-_Nude_Descending_a_Staircase.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Philadelphia Museum of Art" }
  },
  {
    id: 165, rank: null, museumOnly: true,
    title: "Three Musicians",
    artist: "Pablo Picasso",
    year: "1921",
    medium: "Oil on canvas",
    dimensions: "201 × 223 cm",
    description: "Three masked Commedia dell'Arte figures — Pierrot, Harlequin, and a friar — play clarinet, guitar, and accordion in a shallow, stage-like space of interlocking flat planes. One of Picasso's largest and most celebrated Synthetic Cubist paintings, it was a farewell to Cubism as he moved toward Neoclassicism. A second nearly identical version is at MoMA.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Picasso_three_musicians_moma_2006.jpg/500px-Picasso_three_musicians_moma_2006.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Philadelphia Museum of Art" }
  },
  {
    id: 166, rank: null, museumOnly: true,
    title: "The Gross Clinic",
    artist: "Thomas Eakins",
    year: "1875",
    medium: "Oil on canvas",
    dimensions: "244 × 198 cm",
    description: "The eminent surgeon Samuel Gross pauses a thigh operation to address his students, his bloody scalpel in hand, while a distraught woman — the patient's relative — covers her face in the background. Rejected from the Philadelphia Centennial Exhibition as too bloody and controversial, it is now considered the greatest American painting of the 19th century.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg/330px-Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Philadelphia Museum of Art" }
  },

  // ── BARNES FOUNDATION ─────────────────────────────────────────────────────
  {
    id: 167, rank: null, museumOnly: true,
    title: "The Joy of Life (Bonheur de Vivre)",
    artist: "Henri Matisse",
    year: "1905–1906",
    medium: "Oil on canvas",
    dimensions: "176 × 240 cm",
    description: "Matisse's programmatic manifesto of color and hedonism: nude figures lounge, dance, and embrace in an Arcadian landscape of impossibly saturated pinks, greens, and oranges. Scale is irrational — the distant dancers are larger than the foreground figures. Picasso, upon seeing it, immediately began Les Demoiselles d'Avignon. The Barnes Foundation has owned it since 1922.",
    movement: "Fauvism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Le_Bonheur_de_vivre_Barnes_%2801c%29_-_Flickr_-_rverc.jpg/330px-Le_Bonheur_de_vivre_Barnes_%2801c%29_-_Flickr_-_rverc.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Barnes Foundation" }
  },
  {
    id: 168, rank: null, museumOnly: true,
    title: "Mont Sainte-Victoire",
    artist: "Paul Cézanne",
    year: "c. 1902–1904",
    medium: "Oil on canvas",
    dimensions: "73 × 92 cm",
    description: "One of Cézanne's final views of the mountain that dominated his Provençal landscape, painted from his studio on the Lauves hill. The mountain dissolves into crystalline planes of green, blue, and ochre that no longer describe but analyze. Cézanne painted this subject over 60 times. The Barnes holds multiple Cézannes, forming one of the finest collections anywhere.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Paul_C%C3%A9zanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg/330px-Paul_C%C3%A9zanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Barnes Foundation" }
  },
  {
    id: 169, rank: null, museumOnly: true,
    title: "Les Poseuses (The Models)",
    artist: "Georges Seurat",
    year: "1886–1888",
    medium: "Oil on canvas",
    dimensions: "200 × 250 cm",
    description: "Three nude models pose in Seurat's studio — seen from front, side, and back — with his own large painting 'A Sunday on La Grande Jatte' visible on the wall behind them. The contrast between the clothed Parisians in the background work and the unclothed models in the studio is pointed. A smaller version is at the Barnes; the Merion version is the largest.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Georges_Seurat_-_Models_%28Poseuses%29_-_BF811_-_Barnes_Foundation.jpg/330px-Georges_Seurat_-_Models_%28Poseuses%29_-_BF811_-_Barnes_Foundation.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Barnes Foundation" }
  },
  {
    id: 170, rank: null, museumOnly: true,
    title: "Girl with Braids",
    artist: "Amedeo Modigliani",
    year: "1918",
    medium: "Oil on canvas",
    dimensions: "61 × 46 cm",
    description: "A young girl with tight braids gazes past the viewer with Modigliani's signature elongated neck, masklike face, and blank almond eyes. Modigliani spent his career in poverty, working in a single recognizable style he never varied. He died of tubercular meningitis at 35; this late portrait shows his full stylistic maturity.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Girl_with_pigtails_-_Amedeo_Modigliani.jpg/330px-Girl_with_pigtails_-_Amedeo_Modigliani.jpg",
    location: { continent: "North America", country: "USA", city: "Philadelphia", museum: "Barnes Foundation" }
  },

  // ── YALE UNIVERSITY ART GALLERY ───────────────────────────────────────────
  {
    id: 171, rank: null, museumOnly: true,
    title: "The Declaration of Independence",
    artist: "John Trumbull",
    year: "1786–1820",
    medium: "Oil on canvas",
    dimensions: "53 × 79 cm",
    description: "The original study for Trumbull's famous mural in the Capitol Rotunda, this smaller version was the first to be completed and includes portraits painted from life of figures including Jefferson, Adams, and Franklin. Trumbull donated it and his entire collection to Yale in 1831, founding the first college art museum in America.",
    movement: "Neoclassicism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/330px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg",
    location: { continent: "North America", country: "USA", city: "New Haven", museum: "Yale University Art Gallery" }
  },
  {
    id: 172, rank: null, museumOnly: true,
    title: "Italian Woman (La Romaine)",
    artist: "Camille Corot",
    year: "1870–1872",
    medium: "Oil on canvas",
    dimensions: "75 × 59 cm",
    description: "One of Corot's late figure paintings — a genre he returned to after decades of landscape — showing a young Italian woman in regional dress in a meditative pose. The soft, silvery atmosphere of his forest scenes carries over into portraiture: the figure seems to breathe. The Yale gallery holds a distinguished collection of European and American paintings.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Camille_Corot_-_Woman_with_a_Pearl.jpg/330px-Camille_Corot_-_Woman_with_a_Pearl.jpg",
    location: { continent: "North America", country: "USA", city: "New Haven", museum: "Yale University Art Gallery" }
  },

  // ── HUNTINGTON LIBRARY ────────────────────────────────────────────────────
  {
    id: 173, rank: null, museumOnly: true,
    title: "Pinkie",
    artist: "Thomas Lawrence",
    year: "1794",
    medium: "Oil on canvas",
    dimensions: "148 × 102 cm",
    description: "Sarah Barrett Moulton, age 11, stands against a wind-swept sky in a pink muslin dress, sash billowing. Painted the year before her death at 13, it was commissioned by her grandmother. The Huntington paired it with Gainsborough's 'The Blue Boy' in 1921. Together the two paintings became the most visited pair in American art museum history for decades.",
    movement: "Romanticism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Thomas_Lawrence_-_Sarah_Goodin_Barrett_Moulton%2C_Pinkie_%281794%29.jpg/330px-Thomas_Lawrence_-_Sarah_Goodin_Barrett_Moulton%2C_Pinkie_%281794%29.jpg",
    location: { continent: "North America", country: "USA", city: "San Marino", museum: "Huntington Library" }
  },
  {
    id: 174, rank: null, museumOnly: true,
    title: "The Grand Canal, Venice",
    artist: "Canaletto",
    year: "c. 1740",
    medium: "Oil on canvas",
    dimensions: "47 × 80 cm",
    description: "A sweeping view down the Grand Canal from the Rialto toward the Salute, crowded with gondolas and river traffic. Canaletto's vedute (view paintings) of Venice were the essential tourist souvenir for English Grand Tour travelers, and his greatest patron was the British consul Joseph Smith. The Huntington holds an important collection of British art from this period.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Canaletto_-_B%C3%BChrle_foundation_csm_Canal_S_Maria_cf2fa1ba03.jpg/330px-Canaletto_-_B%C3%BChrle_foundation_csm_Canal_S_Maria_cf2fa1ba03.jpg",
    location: { continent: "North America", country: "USA", city: "San Marino", museum: "Huntington Library" }
  },

  // ── MUSEO DE ARTE MODERNO (Mexico City) ───────────────────────────────────
  {
    id: 175, rank: null, museumOnly: true,
    title: "The Wounded Deer",
    artist: "Frida Kahlo",
    year: "1946",
    medium: "Oil on masonite",
    dimensions: "22 × 30 cm",
    description: "Kahlo's face on a deer's body, pierced by nine arrows, runs through a dying forest. Painted after a failed spinal operation she had hoped would end her chronic pain, it is one of her most direct self-portraits of suffering. The deer appears young and vital yet is already mortally wounded — the gap between appearance and inner reality that defined her art.",
    movement: "Surrealism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/92/The_Wounded_Deer_1946.jpg/330px-The_Wounded_Deer_1946.jpg",
    location: { continent: "North America", country: "Mexico", city: "Mexico City", museum: "Museo de Arte Moderno" }
  },
  {
    id: 176, rank: null, museumOnly: true,
    title: "Naturaleza Viva",
    artist: "Rufino Tamayo",
    year: "1952",
    medium: "Oil on canvas",
    dimensions: "76 × 61 cm",
    description: "A still life of tropical fruits glows against a dark ground, painted in Tamayo's characteristic earthy palette of ochre, rust, and muted violet. Tamayo rejected the political muralism of Rivera, Siqueiros, and Orozco in favor of a universal poetic idiom rooted in pre-Columbian color and form. The MAM holds the most significant collection of his easel paintings.",
    movement: "Modernism",
    imageUrl: null,
    location: { continent: "North America", country: "Mexico", city: "Mexico City", museum: "Museo de Arte Moderno" }
  },
  {
    id: 177, rank: null, museumOnly: true,
    title: "Portrait of Elena Flores",
    artist: "María Izquierdo",
    year: "1944",
    medium: "Oil on canvas",
    dimensions: "55 × 45 cm",
    description: "A composed young woman in traditional Mexican dress gazes from the canvas with quiet dignity. Izquierdo, the first Mexican woman to exhibit in the United States (1930), developed a personal vocabulary drawing on popular Mexican imagery, altarpieces, and fairs. She was a close colleague of Tamayo and a significant voice of Mexican modernism.",
    movement: "Modernism",
    imageUrl: null,
    location: { continent: "North America", country: "Mexico", city: "Mexico City", museum: "Museo de Arte Moderno" }
  },

  // ── MUSEO NACIONAL CENTRO DE ARTE REINA SOFÍA ────────────────────────────
  {
    id: 178, rank: null, museumOnly: true,
    title: "The Great Masturbator",
    artist: "Salvador Dalí",
    year: "1929",
    medium: "Oil on canvas",
    dimensions: "110 × 150 cm",
    description: "A monumental melting head — a self-portrait of Dalí's own face — dominates the lower center, its closed eyes suggesting dream and shame. From it emerge figures of erotic fantasy and anxiety: a woman pressing her face to a man's thigh, a locust (Dalí's phobia), a grasshopper. Painted the year he met Gala, it lays bare the obsessions that would define Surrealism.",
    movement: "Surrealism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/DaliGreatMasturbator.jpg/500px-DaliGreatMasturbator.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 179, rank: null, museumOnly: true,
    title: "Woman in Blue",
    artist: "Pablo Picasso",
    year: "1901",
    medium: "Oil on canvas",
    dimensions: "133 × 101 cm",
    description: "A large, frontal portrait of a woman in an elaborate blue dress and hat, painted in a single day in Madrid in the manner of Velázquez. Its bold brushwork, flattened form, and psychological directness show the 19-year-old Picasso absorbing Spanish tradition as he moved toward his mature style. The Reina Sofía holds the most comprehensive collection of Picasso and Dalí in Spain.",
    movement: "Expressionism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 180, rank: null, museumOnly: true,
    title: "Portrait of Josette",
    artist: "Juan Gris",
    year: "1916",
    medium: "Oil on canvas",
    dimensions: "116 × 73 cm",
    description: "A Cubist portrait of Josette, who lived with Juan Gris for 15 years, rendered in the geometric planes and muted palette of his Synthetic Cubist style. Where Picasso's Cubism is aggressive and fragmentary, Gris's is orderly and almost lyrical. He died at 40, and the Reina Sofía holds the largest collection of his work in the world.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Juan_Gris_-_Portrait_de_Madame_Josette_Gris_-_Google_Art_Project.jpg/330px-Juan_Gris_-_Portrait_de_Madame_Josette_Gris_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 181, rank: null, museumOnly: true,
    title: "The Harlequin",
    artist: "Joan Miró",
    year: "1924–1925",
    medium: "Oil on canvas",
    dimensions: "66 × 93 cm",
    description: "An interior dense with floating biomorphic forms, figures, and signs — ladder, eye, moustache, dice, guitar — hovering in a shallow amber space. Miró developed this 'dream imagery' while suffering from hunger-induced hallucinations in Paris. It launched his mature Surrealist style and made his international reputation. The Reina Sofía holds a major Miró collection.",
    movement: "Surrealism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },

  // ── TATE MODERN ──────────────────────────────────────────────────────────
  {
    id: 182, rank: null, museumOnly: true,
    title: "Whaam!",
    artist: "Roy Lichtenstein",
    year: "1963",
    medium: "Acrylic and oil on canvas",
    dimensions: "172 × 406 cm",
    description: "A two-panel painting based on a panel from a 1962 DC war comic, showing a jet firing a rocket at an enemy plane which explodes in a burst of orange flame and the onomatopoeic 'WHAAM!' Lichtenstein replicated the printing dots (Ben-Day dots), bold outlines, and primary colors of cheap comic reproduction, elevating them to monumental fine art.",
    movement: "Pop Art",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/b/b7/Roy_Lichtenstein_Whaam.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Tate Modern" }
  },
  {
    id: 183, rank: null, museumOnly: true,
    title: "Three Studies for Figures at the Base of a Crucifixion",
    artist: "Francis Bacon",
    year: "c. 1944",
    medium: "Oil and pastel on board",
    dimensions: "94 × 74 cm (each panel)",
    description: "Three screaming, writhing figures on an orange ground — identified as the Eumenides (Greek Furies) — form a triptych of visceral horror. When shown in 1945, it shocked a London emerging from war. Bacon cited Grünewald's Isenheim Altarpiece and Picasso's Guernica as inspirations. It established his career and remains the most important British painting of the 20th century.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/11/Three_Studies_for_Figures_at_the_Base_of_a_Crucifixion.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Tate Modern" }
  },
  {
    id: 184, rank: null, museumOnly: true,
    title: "The Snail",
    artist: "Henri Matisse",
    year: "1953",
    medium: "Gouache on paper, cut and pasted",
    dimensions: "287 × 288 cm",
    description: "In his late eighties and confined to a wheelchair, Matisse created his greatest works with scissors and painted paper — a process he called 'drawing with scissors.' The Snail is a near-abstract spiral of colored rectangles. Matisse described it as his most complete rendering of color relationships, and declared the cutouts his best work.",
    movement: "Fauvism",
    imageUrl: null,
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Tate Modern" }
  },
  {
    id: 185, rank: null, museumOnly: true,
    title: "Metamorphosis of Narcissus",
    artist: "Salvador Dalí",
    year: "1937",
    medium: "Oil on canvas",
    dimensions: "51 × 78 cm",
    description: "On the left, Narcissus kneels gazing at his reflection; on the right, a stone hand holds an egg from which a narcissus flower blooms — the same pose transformed. Dalí based the composition on his own 'paranoiac-critical method,' using double images to render the myth of obsessive self-love and death. He brought the painting when he visited Freud in London.",
    movement: "Surrealism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Metamorphosis_of_Narcissus.jpg/330px-Metamorphosis_of_Narcissus.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Tate Modern" }
  },

  // ── WALLACE COLLECTION ────────────────────────────────────────────────────
  {
    id: 186, rank: null, museumOnly: true,
    title: "The Swing",
    artist: "Jean-Honoré Fragonard",
    year: "1767",
    medium: "Oil on canvas",
    dimensions: "81 × 65 cm",
    description: "A young woman on a swing kicks her shoe toward a hidden admirer below while her oblivious husband (or chaperone) pulls the rope from behind. It is the defining image of Rococo frivolity — all pink, powder blue, and garden lushness. The Baron de Saint-Julien commissioned it to show his mistress. The shoe flying toward the young man below leaves nothing to interpretation.",
    movement: "Rococo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg/330px-Joean_Honor%C3%A9_Fragonard_-_The_Swing.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Wallace Collection" }
  },
  {
    id: 187, rank: null, museumOnly: true,
    title: "Perseus and Andromeda",
    artist: "Titian",
    year: "c. 1554–1556",
    medium: "Oil on canvas",
    dimensions: "175 × 189 cm",
    description: "One of Titian's celebrated 'poesie' (narrative paintings) for Philip II of Spain, showing Perseus descending from the sky to rescue the chained Andromeda from a sea monster. Titian painted the flesh with the loose, layered technique of his late period — surfaces that seem to breathe. Rubens copied it and declared Titian the supreme colorist in history.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Perseo_y_Andr%C3%B3meda%2C_por_Tiziano.jpg/330px-Perseo_y_Andr%C3%B3meda%2C_por_Tiziano.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Wallace Collection" }
  },
  {
    id: 188, rank: null, museumOnly: true,
    title: "A Dance to the Music of Time",
    artist: "Nicolas Poussin",
    year: "c. 1634–1636",
    medium: "Oil on canvas",
    dimensions: "83 × 104 cm",
    description: "Four allegorical figures — Poverty, Labor, Wealth, and Pleasure — dance in a ring while Father Time plays his lyre and two putti blow bubbles. The circular dance suggests the inevitability of fortune's wheel. Anthony Powell used it as the title and controlling metaphor for his 12-novel sequence. It is the Wallace Collection's most beloved painting.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/The_dance_to_the_music_of_time_c._1640.jpg/330px-The_dance_to_the_music_of_time_c._1640.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Wallace Collection" }
  },
  {
    id: 189, rank: null, museumOnly: true,
    title: "The Rainbow Landscape",
    artist: "Peter Paul Rubens",
    year: "c. 1636",
    medium: "Oil on panel",
    dimensions: "94 × 123 cm",
    description: "A panoramic view of Rubens's own estate at Het Steen in Flanders after a summer storm, a rainbow arching over the fertile lowland. Painted in the final years of his life for his own pleasure, it is one of the first landscapes in Western art made entirely for private enjoyment. The breadth of sky and earth shows a new relationship between humans and nature.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Peter_Paul_Rubens_-_Landscape_with_a_Rainbow_-_WGA20411.jpg/330px-Peter_Paul_Rubens_-_Landscape_with_a_Rainbow_-_WGA20411.jpg",
    location: { continent: "Europe", country: "United Kingdom", city: "London", museum: "Wallace Collection" }
  },

  // ── ÖSTERREICHISCHE GALERIE BELVEDERE ─────────────────────────────────────
  {
    id: 190, rank: null, museumOnly: true,
    title: "Judith and the Head of Holofernes (Judith I)",
    artist: "Gustav Klimt",
    year: "1901",
    medium: "Oil on canvas with gold leaf",
    dimensions: "84 × 42 cm",
    description: "Klimt's Judith is not a Jewish heroine but a femme fatale: languid, half-naked, her fingers resting on Holofernes's severed head with proprietary satisfaction. The gold frame integrates with the composition, making the painting itself a precious object. The identity as Judith rather than Salome was so confusing that the frame was labeled 'Salome' for years.",
    movement: "Art Nouveau",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Judith_1_%28cropped%29.jpg/330px-Judith_1_%28cropped%29.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Österreichische Galerie Belvedere" }
  },
  {
    id: 191, rank: null, museumOnly: true,
    title: "Death and Life",
    artist: "Gustav Klimt",
    year: "1908–1915",
    medium: "Oil on canvas",
    dimensions: "178 × 198 cm",
    description: "A figure of Death — dark, patterned with crosses and skulls — confronts a mass of naked, intertwined human forms representing Life — sensuous, decorated with flowers. The two halves do not interact but are locked in eternal opposition. Klimt reworked it significantly after 1911, adding the golden background and modifying the life figures.",
    movement: "Art Nouveau",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Gustav_Klimt_-_Death_and_Life_-_Google_Art_Project.jpg/330px-Gustav_Klimt_-_Death_and_Life_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Österreichische Galerie Belvedere" }
  },
  {
    id: 192, rank: null, museumOnly: true,
    title: "The Family",
    artist: "Egon Schiele",
    year: "1918",
    medium: "Oil on canvas",
    dimensions: "153 × 161 cm",
    description: "Schiele's last great painting, left incomplete at his death at 28 — a seated father (himself), mother (Edith), and infant, painted after Edith's death in the Spanish flu epidemic of October 1918. He died three days after her. The tenderness of the image — so unlike his contorted nudes — marks a new phase of maturity that would never develop.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Egon_Schiele_-_Kauerndes_Menschenpaar_%28Die_Familie%29_-_4277_-_%C3%96sterreichische_Galerie_Belvedere.jpg/330px-Egon_Schiele_-_Kauerndes_Menschenpaar_%28Die_Familie%29_-_4277_-_%C3%96sterreichische_Galerie_Belvedere.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Österreichische Galerie Belvedere" }
  },
  {
    id: 193, rank: null, museumOnly: true,
    title: "Napoleon at the Saint-Bernard Pass",
    artist: "Jacques-Louis David",
    year: "1801",
    medium: "Oil on canvas",
    dimensions: "271 × 232 cm",
    description: "Napoleon on a rearing horse points the way across the Alps, his cloak billowing dramatically — a propaganda masterpiece ordered after the actual crossing, which Napoleon made on a mule. David made five versions; this first, painted for Spain, is considered the finest. The names 'Hannibal' and 'Charlemagne' are carved in the rocks — Bonaparte's chosen predecessors.",
    movement: "Neoclassicism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/330px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Österreichische Galerie Belvedere" }
  },

  // ── KUNSTHISTORISCHES MUSEUM ──────────────────────────────────────────────
  {
    id: 194, rank: null, museumOnly: true,
    title: "Hunters in the Snow (Winter)",
    artist: "Pieter Bruegel the Elder",
    year: "1565",
    medium: "Oil on panel",
    dimensions: "117 × 162 cm",
    description: "Part of Bruegel's Months series alongside The Harvesters, this January scene shows huntsmen returning across a snowy hillside, their dogs at their heels, as skaters glide on frozen ponds below. The panoramic space and the way tiny figures animate a vast landscape were revolutionary. Andrei Tarkovsky used it in Solaris (1972) to evoke Earth's irreplaceable beauty.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg/330px-Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Kunsthistorisches Museum" }
  },
  {
    id: 195, rank: null, museumOnly: true,
    title: "The Peasant Wedding",
    artist: "Pieter Bruegel the Elder",
    year: "c. 1567",
    medium: "Oil on panel",
    dimensions: "114 × 164 cm",
    description: "A crowded barn wedding feast in which the bride sits blissful and passive while guests eat, servers carry dishes on a barn door used as a tray, and a bagpiper watches hungrily. Bruegel's paintings of peasant life are not condescending genre scenes but profound observations of communal existence — the energy, appetite, and joy of ordinary people.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project_2.jpg/330px-Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project_2.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Kunsthistorisches Museum" }
  },
  {
    id: 196, rank: null, museumOnly: true,
    title: "Summer",
    artist: "Giuseppe Arcimboldo",
    year: "1563",
    medium: "Oil on panel",
    dimensions: "67 × 51 cm",
    description: "A human face composed entirely of ripe summer fruits, vegetables, and grain — each item painted with botanical precision. Arcimboldo's composite heads for Emperor Maximilian II were first taken as humorous court diversions but have since been recognized as sophisticated visual puzzles engaging Renaissance theories of Nature and the grotesque. Dalí and the Surrealists claimed him as a forefather.",
    movement: "Mannerism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Arcimboldo_-_Les_saisons_-_Le_printemps_-_Sans_cadre.jpg/330px-Arcimboldo_-_Les_saisons_-_Le_printemps_-_Sans_cadre.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Kunsthistorisches Museum" }
  },
  {
    id: 197, rank: null, museumOnly: true,
    title: "The Three Philosophers",
    artist: "Giorgione",
    year: "1508–1509",
    medium: "Oil on canvas",
    dimensions: "123 × 144 cm",
    description: "Three men — one old with a white beard, one middle-aged in Eastern dress, one young — stand before a rocky landscape. Their identities have never been agreed upon: they may be the Three Magi, the three ages of man, Aristotle and his successors, or astrologers observing a cave. The ambiguity is deliberate — Giorgione pioneered paintings without clear narratives.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Giorgione_-_Three_Philosophers_-_Google_Art_Project.jpg/330px-Giorgione_-_Three_Philosophers_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Austria", city: "Vienna", museum: "Kunsthistorisches Museum" }
  },

  // ── NATIONAL MUSEUM OF NORWAY ─────────────────────────────────────────────
  {
    id: 198, rank: null, museumOnly: true,
    title: "The Sick Child",
    artist: "Edvard Munch",
    year: "1885–1886",
    medium: "Oil on canvas",
    dimensions: "120 × 119 cm",
    description: "A dying girl turns her face toward a window while a grief-bowed woman sits beside her, unable to look. Munch's sister Sophie died of tuberculosis when he was 14; he returned to this subject six times across his career. The first version, shown here, was attacked by critics for its unfinished, scraped surface — which is precisely what makes it so raw.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Edvard_Munch_-_The_Sick_Child_I_-_NG.K%26H.A.19029_-_National_Museum_of_Art%2C_Architecture_and_Design.jpg/330px-Edvard_Munch_-_The_Sick_Child_I_-_NG.K%26H.A.19029_-_National_Museum_of_Art%2C_Architecture_and_Design.jpg",
    location: { continent: "Europe", country: "Norway", city: "Oslo", museum: "National Museum of Norway" }
  },
  {
    id: 199, rank: null, museumOnly: true,
    title: "Puberty",
    artist: "Edvard Munch",
    year: "1894–1895",
    medium: "Oil on canvas",
    dimensions: "151 × 110 cm",
    description: "A naked adolescent girl sits upright on a bed, arms crossed over her groin in a gesture of vulnerable self-protection. An enormous dark shadow looms behind her on the wall — the shadow of anxiety, sexuality, and adulthood. Munch destroyed an earlier version; this is a reconstruction made from memory. It is one of the most psychologically uncomfortable paintings in Western art.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Puberty_%281894-95%29_by_Edvard_Munch.jpg/330px-Puberty_%281894-95%29_by_Edvard_Munch.jpg",
    location: { continent: "Europe", country: "Norway", city: "Oslo", museum: "National Museum of Norway" }
  },
  {
    id: 200, rank: null, museumOnly: true,
    title: "Girls on the Pier",
    artist: "Edvard Munch",
    year: "1901–1903",
    medium: "Oil on canvas",
    dimensions: "136 × 125 cm",
    description: "Three girls in white summer dresses lean over a wooden railing at Åsgårdstrand, gazing into dark water while a crescent moon hangs above the fjord. The composition — viewed from behind, no faces shown — creates a dreamlike distance. Munch painted this scene over 20 times across four decades. The National Museum holds the most exhibited version.",
    movement: "Expressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Munch_Girls_on_the_pier.jpg/330px-Munch_Girls_on_the_pier.jpg",
    location: { continent: "Europe", country: "Norway", city: "Oslo", museum: "National Museum of Norway" }
  },

  // ── VATICAN MUSEUMS (SISTINE CHAPEL) ──────────────────────────────────────
  {
    id: 201, rank: null, museumOnly: true,
    title: "The Last Judgment",
    artist: "Michelangelo",
    year: "1536–1541",
    medium: "Fresco",
    dimensions: "1370 × 1220 cm",
    description: "The entire altar wall of the Sistine Chapel is covered by this massive fresco of the Second Coming — Christ at center, the saved ascending on the left, the damned dragged to hell on the right. Michelangelo included his own face in the flayed skin held by Saint Bartholomew. When unveiled, the nudity caused scandal; Pope Paul IV had loincloths painted over the figures.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/330px-Last_Judgement_%28Michelangelo%29.jpg",
    location: { continent: "Europe", country: "Vatican City", city: "Vatican City", museum: "Vatican Museums (Sistine Chapel)" }
  },
  {
    id: 202, rank: null, museumOnly: true,
    title: "The Temptation and Expulsion",
    artist: "Michelangelo",
    year: "c. 1509–1510",
    medium: "Fresco",
    dimensions: "280 × 570 cm",
    description: "A single panel of the Sistine ceiling shows two scenes divided by the Tree of Knowledge: on the left, a serpent with a woman's torso offers the fruit to Adam and Eve; on the right, an angel drives the fallen couple from Paradise. The contrast between the lush garden and the barren landscape outside Eden is stark and haunting.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Michelangelo%2C_Fall_and_Expulsion_from_Garden_of_Eden_00.jpg/330px-Michelangelo%2C_Fall_and_Expulsion_from_Garden_of_Eden_00.jpg",
    location: { continent: "Europe", country: "Vatican City", city: "Vatican City", museum: "Vatican Museums (Sistine Chapel)" }
  },
  {
    id: 203, rank: null, museumOnly: true,
    title: "The Flood",
    artist: "Michelangelo",
    year: "c. 1508–1509",
    medium: "Fresco",
    dimensions: "280 × 570 cm",
    description: "Painted in the first campaign of the Sistine ceiling, this panel shows the desperate scramble of humanity as the floodwaters rise — figures clinging to high ground, swimming, loading a boat. It is the most narratively complex panel on the ceiling, with dozens of figures in anguished motion. Michelangelo's figures here are smaller and more crowded than his later, more confident panels.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/The_Deluge_after_restoration.jpg/330px-The_Deluge_after_restoration.jpg",
    location: { continent: "Europe", country: "Vatican City", city: "Vatican City", museum: "Vatican Museums (Sistine Chapel)" }
  },

  // ── VATICAN MUSEUMS (APOSTOLIC PALACE) ────────────────────────────────────
  {
    id: 204, rank: null, museumOnly: true,
    title: "Disputation of the Holy Sacrament (Disputa)",
    artist: "Raphael",
    year: "1509–1510",
    medium: "Fresco",
    dimensions: "500 × 770 cm",
    description: "Facing The School of Athens across the Stanza della Segnatura, this fresco shows the Church Triumphant and Militant united around the Eucharist — saints and theologians below, Christ enthroned in heaven above. Raphael organized a cast of hundreds into a composition of serene clarity. Together with the School of Athens, it defines High Renaissance fresco painting.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Raphaels_Disputation_of_the_Holy_Sacrament.jpg/330px-Raphaels_Disputation_of_the_Holy_Sacrament.jpg",
    location: { continent: "Europe", country: "Vatican City", city: "Vatican City", museum: "Vatican Museums (Apostolic Palace)" }
  },
  {
    id: 205, rank: null, museumOnly: true,
    title: "Parnassus",
    artist: "Raphael",
    year: "1509–1511",
    medium: "Fresco",
    dimensions: "670 cm wide",
    description: "Apollo plays the lira da braccio on Mount Parnassus surrounded by the nine Muses and the great poets — Homer, Dante, Virgil, Sappho, Ovid — ancient and modern combined. Raphael includes a self-portrait in the right foreground. The scene extends the program of the Stanza: as the Disputa represents Theology and the School of Athens Philosophy, Parnassus represents Poetry.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Raphael_-_The_Parnassus.jpg/330px-Raphael_-_The_Parnassus.jpg",
    location: { continent: "Europe", country: "Vatican City", city: "Vatican City", museum: "Vatican Museums (Apostolic Palace)" }
  },

  // ── GALLERIA BORGHESE ──────────────────────────────────────────────────────
  {
    id: 206, rank: null, museumOnly: true,
    title: "Lady with a Unicorn",
    artist: "Raphael",
    year: "c. 1505–1506",
    medium: "Oil on panel",
    dimensions: "65 × 51 cm",
    description: "A young woman holds a small unicorn — symbol of chastity — in a pose echoing Leonardo's portrait compositions. Originally the unicorn was a dog; Raphael repainted it sometime after the initial sitting. The sitter's identity is debated (possibly Maddalena Doni). X-ray and infrared examination have revealed the multiple layers of revision.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Lady_with_unicorn_by_Rafael_Santi.jpg/330px-Lady_with_unicorn_by_Rafael_Santi.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "Galleria Borghese" }
  },
  {
    id: 207, rank: null, museumOnly: true,
    title: "Self-Portrait as Bacchus (Sick Bacchus)",
    artist: "Caravaggio",
    year: "c. 1593",
    medium: "Oil on canvas",
    dimensions: "67 × 53 cm",
    description: "A pale, greenish young Caravaggio — possibly recovering from a horse-riding injury — poses as a sickly Bacchus, offering a cluster of grapes and a glass of wine. The grapes are realistic to the point of entomological scrutiny; leaves show insect damage. It is Caravaggio's first self-portrait and demonstrates his radical naturalism already fully formed.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Sick_young_Bacchus_by_Caravaggio.jpg/330px-Sick_young_Bacchus_by_Caravaggio.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "Galleria Borghese" }
  },
  {
    id: 208, rank: null, museumOnly: true,
    title: "David with the Head of Goliath",
    artist: "Caravaggio",
    year: "1610",
    medium: "Oil on canvas",
    dimensions: "125 × 101 cm",
    description: "A melancholy David holds the severed head of Goliath — whose face is Caravaggio's own self-portrait, painted while he was a fugitive murderer seeking a papal pardon. The identification of the head as Caravaggio's face is universally accepted. He sent the painting to Cardinal Scipione Borghese, who was handling his pardon. He died of fever before it was granted.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Caravaggio_-_David_with_the_Head_of_Goliath_-_Vienna.jpg/330px-Caravaggio_-_David_with_the_Head_of_Goliath_-_Vienna.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "Galleria Borghese" }
  },
  {
    id: 209, rank: null, museumOnly: true,
    title: "Madonna and Child with St. Anne (Dei Palafrenieri)",
    artist: "Caravaggio",
    year: "1605–1606",
    medium: "Oil on canvas",
    dimensions: "292 × 211 cm",
    description: "The Madonna and the Christ child together crush the serpent underfoot while St. Anne watches. The figures are life-size and deeply human — the Madonna and child depicted without idealization, touching in their ordinariness. Rejected by its original patrons (who objected to the peasant realism), it was immediately purchased by Cardinal Borghese.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Caravaggio_-_La_Madonna_dei_Palafrenieri%2C_1605%2C_110.jpg/330px-Caravaggio_-_La_Madonna_dei_Palafrenieri%2C_1605%2C_110.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "Galleria Borghese" }
  },

  // ── GEMÄLDEGALERIE ALTE MEISTER (Dresden) ─────────────────────────────────
  {
    id: 210, rank: null, museumOnly: true,
    title: "Girl Reading a Letter at an Open Window",
    artist: "Johannes Vermeer",
    year: "c. 1657–1659",
    medium: "Oil on canvas",
    dimensions: "84 × 65 cm",
    description: "A young woman reads a letter by an open window, her reflection faintly visible in the glass. For centuries, the wall behind her appeared empty, but in 2019 cleaning and restoration revealed that Vermeer had painted a Cupid there — later overpainted by another hand. The restoration transformed the painting's meaning: the Cupid confirms the letter is a love letter.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Johannes_Vermeer_-_Girl_Reading_a_Letter_by_an_Open_Window_-_Google_Art_Project.jpg/330px-Johannes_Vermeer_-_Girl_Reading_a_Letter_by_an_Open_Window_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Germany", city: "Dresden", museum: "Gemäldegalerie Alte Meister" }
  },
  {
    id: 211, rank: null, museumOnly: true,
    title: "Sleeping Venus (Dresden Venus)",
    artist: "Giorgione (completed by Titian)",
    year: "c. 1508–1510",
    medium: "Oil on canvas",
    dimensions: "108 × 175 cm",
    description: "The first monumental reclining nude in Western art — Venus asleep in a Venetian landscape, utterly at ease and unaware of being observed. Giorgione died of plague before completing it; Titian painted the landscape and drapery. Every subsequent reclining nude (Titian's Venus of Urbino, Manet's Olympia) descends from this revolutionary image.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Giorgione_-_Sleeping_Venus_-_Google_Art_Project_2.jpg/330px-Giorgione_-_Sleeping_Venus_-_Google_Art_Project_2.jpg",
    location: { continent: "Europe", country: "Germany", city: "Dresden", museum: "Gemäldegalerie Alte Meister" }
  },
  {
    id: 212, rank: null, museumOnly: true,
    title: "The Tribute Money",
    artist: "Titian",
    year: "c. 1516",
    medium: "Oil on panel",
    dimensions: "75 × 56 cm",
    description: "A Pharisee holds a coin toward Christ, who responds to the question 'Is it lawful to pay taxes to Caesar?' by pointing heavenward. Titian restricts the scene to two busts — the contrast between the scheming questioner and the serene Christ — making it one of the first large-scale two-figure devotional paintings. Augustus the Strong of Saxony acquired it in 1746 for Dresden.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Titian_-_The_Tribute_Money_-_Google_Art_Project.jpg/330px-Titian_-_The_Tribute_Money_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Germany", city: "Dresden", museum: "Gemäldegalerie Alte Meister" }
  },

  // ── SAN LUIGI DEI FRANCESI ────────────────────────────────────────────────
  {
    id: 213, rank: null, museumOnly: true,
    title: "The Inspiration of Saint Matthew",
    artist: "Caravaggio",
    year: "1602",
    medium: "Oil on canvas",
    dimensions: "292 × 186 cm",
    description: "An angel descends urgently to guide the hand of Saint Matthew as he writes the Gospel — their faces nearly touching, the angel's fingers touching Matthew's. Caravaggio's first version was rejected because Matthew appeared illiterate; this second version, accepted, shows the same radical intimacy between the divine and the human world. The three paintings form the Contarelli Chapel cycle.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/The_Inspiration_of_Saint_Matthew_by_Caravaggio.jpg/330px-The_Inspiration_of_Saint_Matthew_by_Caravaggio.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "San Luigi dei Francesi" }
  },
  {
    id: 214, rank: null, museumOnly: true,
    title: "The Martyrdom of Saint Matthew",
    artist: "Caravaggio",
    year: "1599–1600",
    medium: "Oil on canvas",
    dimensions: "323 × 343 cm",
    description: "A barely clothed executioner raises a sword over the prostrate Matthew while a crowd scatters in panic. Caravaggio painted himself as a witness in the background, staring out from the chaos. The scene's violence and naturalism — no halos, no heavenly glow, just flesh and fear — scandalized Rome and permanently altered the course of religious painting.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/The_Martyrdom_of_Saint_Matthew-Caravaggio_%28c._1599-1600%29.jpg/330px-The_Martyrdom_of_Saint_Matthew-Caravaggio_%28c._1599-1600%29.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "San Luigi dei Francesi" }
  },

  // ── Museo del Prado additions ─────────────────────────────────────────────
  {
    id: 215, rank: null, museumOnly: true,
    title: "The Nobleman with his Hand on his Chest",
    artist: "El Greco",
    year: "c. 1580",
    medium: "Oil on canvas",
    dimensions: "81.8 × 65.8 cm",
    description: "The most celebrated portrait in Spanish art, this anonymous nobleman presses his right hand to his chest in a gesture of solemn oath or loyalty — a convention of the Spanish aristocracy. The stark black doublet and white ruff lend the figure a severe, almost otherworldly dignity. El Greco's elongated form and luminous treatment of the collar anticipate the psychological intensity of modern portraiture.",
    movement: "Mannerism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/El_caballero_de_la_mano_en_el_pecho.jpg/330px-El_caballero_de_la_mano_en_el_pecho.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 216, rank: null, museumOnly: true,
    title: "The Adoration of the Shepherds",
    artist: "El Greco",
    year: "1612–14",
    medium: "Oil on canvas",
    dimensions: "319 × 180 cm",
    description: "El Greco's final masterpiece, painted for his own tomb chapel in Toledo and completed in the last years of his life. The composition spirals upward in a characteristic flame-like surge — earthly shepherds below, angelic host above — bathed in a cold, ecstatic light that seems to emanate from the Christ child himself. It is the fullest expression of his idiosyncratic Byzantine-Mannerist vision.",
    movement: "Mannerism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/The_Adoration_of_the_Shepherds%2C_El_Greco.jpg/330px-The_Adoration_of_the_Shepherds%2C_El_Greco.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 217, rank: null, museumOnly: true,
    title: "The Holy Trinity",
    artist: "El Greco",
    year: "1577–79",
    medium: "Oil on canvas",
    dimensions: "300 × 179 cm",
    description: "Painted for the church of Santo Domingo el Antiguo in Toledo, this was one of El Greco's first major commissions after arriving in Spain. God the Father supports the dead Christ while angels weep around them — a composition derived from Dürer's print but utterly transformed by El Greco's Byzantine sense of gold, elongation, and spiritual urgency. It announced a new voice in Spanish painting.",
    movement: "Mannerism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/La_Trinidad_%28El_Greco%2C_1577-1579%29.jpg/330px-La_Trinidad_%28El_Greco%2C_1577-1579%29.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 218, rank: null, museumOnly: true,
    title: "Charles V at Mühlberg",
    artist: "Titian",
    year: "1548",
    medium: "Oil on canvas",
    dimensions: "335 × 283 cm",
    description: "The greatest equestrian portrait of the Renaissance, painted to commemorate Charles V's victory over the Protestant Schmalkaldic League. Titian shows the Holy Roman Emperor in black armor, lance in hand, at dusk — invoking the Christian knight of legend. The work defined the conventions of royal equestrian portraiture for two centuries, directly influencing Velázquez and then Van Dyck.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Carlos_V_en_M%C3%BChlberg%2C_by_Titian%2C_from_Prado_in_Google_Earth.jpg/330px-Carlos_V_en_M%C3%BChlberg%2C_by_Titian%2C_from_Prado_in_Google_Earth.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 219, rank: null, museumOnly: true,
    title: "Bacchanal of the Andrians",
    artist: "Titian",
    year: "1523–26",
    medium: "Oil on canvas",
    dimensions: "175 × 193 cm",
    description: "The mythical inhabitants of the island of Andros celebrate a river of wine described in an ancient text by Philostratus. Titian's figures revel in a golden afternoon light — reclining, dancing, drinking — with a nude in the right foreground often compared to the Louvre's Sleeping Ariadne. Painted for the Este court in Ferrara, it is among the supreme achievements of Venetian pagan mythology painting.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bacanal_de_los_andrios.jpg/330px-Bacanal_de_los_andrios.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 220, rank: null, museumOnly: true,
    title: "Venus and Adonis",
    artist: "Titian",
    year: "1553–54",
    medium: "Oil on canvas",
    dimensions: "186 × 207 cm",
    description: "The goddess of love clings desperately to Adonis as he tears himself away to hunt — unaware she knows he will die. Titian chose to show Venus from behind, a radical compositional choice that turns an erotic spectacle into a meditation on futile love. The Prado holds the prime autograph version of a composition Titian replicated many times across Europe.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus_and_Adonis_by_Titian.jpg/330px-Venus_and_Adonis_by_Titian.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 221, rank: null, museumOnly: true,
    title: "The Three Graces",
    artist: "Peter Paul Rubens",
    year: "c. 1635",
    medium: "Oil on panel",
    dimensions: "221 × 181 cm",
    description: "Rubens' late masterpiece of the nude — three women, identified as the Charites of Greek mythology, embrace in a woodland clearing. With extraordinary intimacy, one of the figures has the features of his young second wife, Hélène Fourment. The painting is Rubens at his most private: painterly brushwork, warm flesh, and a lyrical ease that places it beyond his large allegorical productions.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/The_Three_Graces%2C_by_Peter_Paul_Rubens%2C_from_Prado_in_Google_Earth.jpg/330px-The_Three_Graces%2C_by_Peter_Paul_Rubens%2C_from_Prado_in_Google_Earth.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 222, rank: null, museumOnly: true,
    title: "Self-Portrait",
    artist: "Albrecht Dürer",
    year: "1498",
    medium: "Oil on panel",
    dimensions: "52 × 41 cm",
    description: "A 26-year-old Dürer presents himself as a fashionable young gentleman — Italian doublet, braided hair, gloves in hand — staring directly at the viewer with calm, almost arrogant confidence. The open window behind him frames an Alpine landscape. Dürer was the first Northern European artist to produce a systematic series of self-portraits, and this is his most famous.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Selbstportr%C3%A4t%2C_by_Albrecht_D%C3%BCrer%2C_from_Prado_in_Google_Earth.jpg/330px-Selbstportr%C3%A4t%2C_by_Albrecht_D%C3%BCrer%2C_from_Prado_in_Google_Earth.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 223, rank: null, museumOnly: true,
    title: "Adam and Eve",
    artist: "Albrecht Dürer",
    year: "1507",
    medium: "Oil on panel (diptych)",
    dimensions: "209 × 81 cm each",
    description: "Dürer's largest and most ambitious paintings, executed on two tall panels after his second Italian journey. Adam and Eve stand in separate panels as ideal nude figures — Dürer's attempt to establish a canon of human proportion in the manner of the ancient Greeks. Yet there is nothing cold about them: Eve extends the apple with graceful curiosity while Adam reaches tentatively forward. The Prado pair is the only fully autograph painted version of the subject.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Albrecht_D%C3%BCrer_-_Adam_and_Eve_%28Prado%29_2.jpg/330px-Albrecht_D%C3%BCrer_-_Adam_and_Eve_%28Prado%29_2.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 224, rank: null, museumOnly: true,
    title: "The Triumph of Death",
    artist: "Pieter Bruegel the Elder",
    year: "c. 1562",
    medium: "Oil on panel",
    dimensions: "117 × 162 cm",
    description: "An army of skeletons wages total war on humanity. Across a scorched, smoking landscape, Death on a pale horse leads legions of the dead against kings, knights, lovers, and peasants alike — no rank or plea offers protection. One of the most terrifying paintings ever made, it compresses the medieval Dance of Death tradition into a panoramic vision of apocalyptic horror that feels disturbingly modern.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Triumph_of_Death_Brueghel.jpg/330px-Triumph_of_Death_Brueghel.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 225, rank: null, museumOnly: true,
    title: "The Clothed Maja",
    artist: "Francisco Goya",
    year: "c. 1800–07",
    medium: "Oil on canvas",
    dimensions: "97 × 190 cm",
    description: "The companion to The Naked Maja, this portrait shows the same woman — thought to be the Duchess of Alba — fully dressed in a white bolero jacket and yellow trousers in the style of a maja, a fashionable working-class woman. Both paintings were commissioned by Prime Minister Godoy and hung together, possibly on a hidden mechanism. The Clothed Maja has the stranger charge: a clothed figure that somehow feels more transgressive.",
    movement: "Romanticism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Goya_Maja_ubrana2.jpg/330px-Goya_Maja_ubrana2.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 226, rank: null, museumOnly: true,
    title: "The Second of May 1808",
    artist: "Francisco Goya",
    year: "1814",
    medium: "Oil on canvas",
    dimensions: "266 × 345 cm",
    description: "Painted with The Third of May 1808 as its companion, this canvas shows the uprising itself: Mamluk cavalry from Napoleon's Egyptian forces attacked by a frenzied Madrid crowd in the Puerta del Sol. Where The Third of May shows the aftermath — execution — this shows the chaos of revolt, bodies and horses churning together in desperate hand-to-hand combat. Together the two paintings form the founding monument of anti-war imagery.",
    movement: "Romanticism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/El_dos_de_mayo_de_1808_en_Madrid.jpg/330px-El_dos_de_mayo_de_1808_en_Madrid.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 227, rank: null, museumOnly: true,
    title: "Witches' Sabbath (The Great He-Goat)",
    artist: "Francisco Goya",
    year: "1820–23",
    medium: "Oil mural transferred to canvas",
    dimensions: "140 × 436 cm",
    description: "One of Goya's Black Paintings, made directly on the walls of his farmhouse outside Madrid — a place he called the Quinta del Sordo. A coven of hollow-eyed figures huddles around a giant silhouetted goat in an unlit field. Painted for his own walls, not for exhibition, these works strip away all professional restraint; they are the most rawly disturbing paintings of the 19th century.",
    movement: "Romanticism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Francisco_de_Goya_y_Lucientes_-_Witches%27_Sabbath_%28The_Great_He-Goat%29.jpg/330px-Francisco_de_Goya_y_Lucientes_-_Witches%27_Sabbath_%28The_Great_He-Goat%29.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 228, rank: null, museumOnly: true,
    title: "The Parasol",
    artist: "Francisco Goya",
    year: "1777",
    medium: "Oil on linen",
    dimensions: "104 × 152 cm",
    description: "An early Goya, made as a tapestry cartoon for the royal palaces when he was still working in a light, Rococo-inflected style. A fashionable young woman sits in sunlight while a young man holds a parasol over her — the scene captures the leisure world of late 18th-century Madrid with a charm and spontaneity that already marks Goya's quick brushwork and eye for social observation.",
    movement: "Rococo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/El_Quitasol_%28Goya%29.jpg/330px-El_Quitasol_%28Goya%29.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 229, rank: null, museumOnly: true,
    title: "Holy Family with a Lamb",
    artist: "Raphael",
    year: "1507",
    medium: "Oil on panel",
    dimensions: "32 × 22 cm",
    description: "A small, luminous panel from Raphael's Florentine years. The infant Christ holds a lamb — symbol of his future sacrifice — while the Virgin and Joseph look on with tender concern. Leonardo's influence is unmistakable in the pyramidal grouping and soft landscape background. Despite its small scale it is one of the most harmoniously composed devotional works of the High Renaissance.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Raphael_Holy_Family_with_the_Lamb.jpg/330px-Raphael_Holy_Family_with_the_Lamb.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 230, rank: null, museumOnly: true,
    title: "Portrait of a Cardinal",
    artist: "Raphael",
    year: "c. 1510",
    medium: "Oil on panel",
    dimensions: "79 × 61 cm",
    description: "One of the most penetrating portraits of the Renaissance, this unknown cardinal — possibly Alessandro Farnese or Luigi d'Aragona — meets the viewer's gaze with an expression of cool, watchful intelligence. Raphael reduces the palette to red and white, letting the face carry everything. The identity remains unknown, which only deepens the sense of confronting a real, guarded personality across five centuries.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Portrait_of_a_Cardinal%2C_by_Raffael%2C_from_Prado_in_Google_Earth.jpg/330px-Portrait_of_a_Cardinal%2C_by_Raffael%2C_from_Prado_in_Google_Earth.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 231, rank: null, museumOnly: true,
    title: "The Madonna of the Fish",
    artist: "Raphael",
    year: "c. 1513–14",
    medium: "Oil on panel transferred to canvas",
    dimensions: "113 × 88 cm",
    description: "The archangel Raphael presents young Tobias — carrying the healing fish of scripture — to the enthroned Virgin and Child, while St. Jerome kneels opposite with his lion and Bible. Raphael's composition flows in a stately diagonal, each figure individualized yet unified in a golden, contemplative calm. The painting gives its name to the theme it defined: the Sacra Conversazione of the High Renaissance.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Raffaello_Sanzio_-_Sacra_Famiglia_con_Rafael%2C_Tobia_e_San_Girolamo%2C_o_Vergine_del_pesce.jpg/330px-Raffaello_Sanzio_-_Sacra_Famiglia_con_Rafael%2C_Tobia_e_San_Girolamo%2C_o_Vergine_del_pesce.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 232, rank: null, museumOnly: true,
    title: "Agnus Dei",
    artist: "Francisco de Zurbarán",
    year: "c. 1635–40",
    medium: "Oil on canvas",
    dimensions: "38 × 62 cm",
    description: "A lamb lies bound on a stone slab, its legs tied, its head turned toward us with dark, patient eyes. Nothing else. No narrative, no symbolic props — just light falling on wool against shadow. One of the most austere and quietly devastating images in all of European painting, this small canvas translates Christian sacrifice into an almost unbearably literal still life.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Francisco_de_Zurbar%C3%A1n_006.jpg/330px-Francisco_de_Zurbar%C3%A1n_006.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 233, rank: null, museumOnly: true,
    title: "The Immaculate Conception of Los Venerables",
    artist: "Bartolomé Esteban Murillo",
    year: "1678",
    medium: "Oil on canvas",
    dimensions: "274 × 190 cm",
    description: "Murillo's grandest treatment of the Immaculate Conception — a subject he returned to throughout his career. The Virgin ascends on clouds supported by cherubs, surrounded by the traditional Marian symbols: moon underfoot, halo of stars, white and blue robes of purity. The warm golden light and vaporous softness of the flesh mark Murillo's mature estilo vaporoso, which captivated European collectors for a century after his death.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Murillo_immaculate_conception.jpg/330px-Murillo_immaculate_conception.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  {
    id: 234, rank: null, museumOnly: true,
    title: "Jacob's Dream",
    artist: "José de Ribera",
    year: "1639",
    medium: "Oil on canvas",
    dimensions: "179 × 233 cm",
    description: "The patriarch Jacob sleeps on a stone, his cloak drawn over him, utterly at rest — while above him the ladder to heaven and the promise of God's covenant unfold. Ribera stages the divine vision with characteristically restrained drama: the ladder is barely suggested by light, the angel's presence implied rather than shown. It is a painting about the interior experience of faith, rendered with extraordinary humanity.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/El_sue%C3%B1o_de_Jacob%2C_por_Jos%C3%A9_de_Ribera.jpg/330px-El_sue%C3%B1o_de_Jacob%2C_por_Jos%C3%A9_de_Ribera.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo del Prado" }
  },
  // ── LOUVRE MUSEUM — museum-only paintings ──────────────────────────────
  {
    id: 235, rank: null, museumOnly: true,
    title: "Grande Odalisque",
    artist: "Jean-Auguste-Dominique Ingres",
    year: "1814",
    medium: "Oil on canvas",
    dimensions: "89 × 163 cm",
    description: "Ingres deliberately added extra vertebrae to elongate his subject's back into a sinuous, impossible curve — yet the effect feels supremely right, almost inevitable. The painting caused scandal at its 1814 exhibition, with critics noting the anatomical liberties, but these distortions became central to Ingres's stylistic signature. It remains the defining image of 19th-century Orientalist fantasy.",
    movement: "Neoclassicism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/La_grande_odalisque_-_Jean-Auguste_Dominique_Ingres_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1158.jpg/330px-La_grande_odalisque_-_Jean-Auguste_Dominique_Ingres_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1158.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 236, rank: null, museumOnly: true,
    title: "The Astronomer",
    artist: "Johannes Vermeer",
    year: "c. 1668",
    medium: "Oil on canvas",
    dimensions: "51 × 45 cm",
    description: "Vermeer's scientist reaches toward a celestial globe in a room suffused with afternoon light, exploring the relationship between human knowledge and divine creation. The subject may be Antonie van Leeuwenhoek, the microscopy pioneer who was Vermeer's neighbor in Delft. A Nazi acquisition label on its back records its seizure from a Jewish collector during World War II.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Johannes_Vermeer_-_The_Astronomer_-_1668.jpg/330px-Johannes_Vermeer_-_The_Astronomer_-_1668.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 237, rank: null, museumOnly: true,
    title: "Bathsheba at Her Bath",
    artist: "Rembrandt van Rijn",
    year: "1654",
    medium: "Oil on canvas",
    dimensions: "142 × 142 cm",
    description: "Rembrandt's nude is not an idealized goddess but a real woman lost in thought, holding David's letter summoning her to an adulterous affair that will upend her life. His model was Hendrickje Stoffels, Rembrandt's companion, whose absorbed inwardness suggests someone weighing an impossible choice. Kenneth Clark called it Rembrandt's greatest painting of the nude.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Rembrandt_Harmensz._van_Rijn_016.jpg/330px-Rembrandt_Harmensz._van_Rijn_016.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 238, rank: null, museumOnly: true,
    title: "Death of the Virgin",
    artist: "Caravaggio",
    year: "c. 1604–1606",
    medium: "Oil on canvas",
    dimensions: "369 × 245 cm",
    description: "The church that commissioned this painting rejected it because the Virgin looked like a drowned woman rather than a sacred figure — Caravaggio depicted her with a swollen belly and bare feet, the apostles in real grief rather than idealized consolation. The rejection was quickly overridden: Rubens advised the Duke of Mantua to purchase it immediately. It passed through Europe's grandest collections before reaching the Louvre.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Death_of_the_Virgin-Caravaggio_(1606).jpg/330px-Death_of_the_Virgin-Caravaggio_(1606).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 239, rank: null, museumOnly: true,
    title: "Saint John the Baptist",
    artist: "Leonardo da Vinci",
    year: "c. 1513–1516",
    medium: "Oil on walnut wood",
    dimensions: "69 × 57 cm",
    description: "Leonardo's final painting is his most psychologically unsettling: a smiling figure emerges from impenetrable darkness, arm raised and finger pointing upward in a gesture both sacred and ambiguous. The sfumato is absolute here — the face dissolves at its edges into shadow — and the sexuality of the figure, his soft features and spiral curls, has disturbed and fascinated viewers for five centuries. Kenneth Clark called it 'the eternal question mark.'",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg/330px-Leonardo_da_Vinci_-_Saint_John_the_Baptist_C2RMF_retouched.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 240, rank: null, museumOnly: true,
    title: "The Embarkation for Cythera",
    artist: "Jean-Antoine Watteau",
    year: "c. 1717",
    medium: "Oil on canvas",
    dimensions: "129 × 194 cm",
    description: "Watteau submitted this as his admission piece to the Royal Academy in 1717, and it was so unlike anything before that the academicians invented a new category — the fête galante — to classify it. Elegantly dressed couples linger near the mythological island of love in a haze of gold and roses. Whether they are arriving toward love or departing from it remains deliberately unresolved, and that ambiguity became the emotional signature of the Rococo.",
    movement: "Rococo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/L'Embarquement_pour_Cyth%C3%A8re%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg/330px-L'Embarquement_pour_Cyth%C3%A8re%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 241, rank: null, museumOnly: true,
    title: "The Turkish Bath",
    artist: "Jean-Auguste-Dominique Ingres",
    year: "c. 1852–1862",
    medium: "Oil on canvas glued to wood",
    dimensions: "108 × 110 cm",
    description: "Ingres worked on this tondo for a decade, converting it from a rectangle to a circle at age 82 and adding a new foreground figure at the last moment. The bather lifting her hair is derived from his own Grande Odalisque — created 40 years earlier — making this painting a summation of his lifelong obsession with the female form. It is the final and most concentrated statement of his Orientalist aesthetic.",
    movement: "Neoclassicism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Le_Bain_Turc%2C_by_Jean_Auguste_Dominique_Ingres%2C_from_C2RMFFXD.jpg/330px-Le_Bain_Turc%2C_by_Jean_Auguste_Dominique_Ingres%2C_from_C2RMFFXD.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 242, rank: null, museumOnly: true,
    title: "The Intervention of the Sabine Women",
    artist: "Jacques-Louis David",
    year: "1799",
    medium: "Oil on canvas",
    dimensions: "385 × 522 cm",
    description: "David's counter to his own Oath of the Horatii replaces masculine sacrifice with feminine intervention — women interposing their bodies and children between fathers and husbands who are about to kill each other. Created during the Directory, it was widely read as a call for reconciliation after the Revolution's violence. David charged admission to view it in his studio, pioneering the modern art exhibition.",
    movement: "Neoclassicism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/The_Intervention_of_the_Sabine_Women_-_David_(Louvre_INV_3691).jpg/330px-The_Intervention_of_the_Sabine_Women_-_David_(Louvre_INV_3691).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 243, rank: null, museumOnly: true,
    title: "Pierrot",
    artist: "Jean-Antoine Watteau",
    year: "c. 1718–1719",
    medium: "Oil on canvas",
    dimensions: "184.5 × 149.5 cm",
    description: "Life-sized, frontal, and absolutely alone against an open sky, Pierrot stands while his companions mill below as if he has already been left behind. The figure's absolute stillness and melancholy vacancy make it the most mysterious of Watteau's paintings — not a scene but a confrontation with a soul. Long titled 'Gilles' after the related commedia character, it is often read as a disguised self-portrait.",
    movement: "Rococo",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Pierrot_-_Antoine_Watteau_-_Mus%C3%A9e_du_Louvre_Peintures_MI_1121_-_apr%C3%A8s_restauration_2024.jpg/330px-Pierrot_-_Antoine_Watteau_-_Mus%C3%A9e_du_Louvre_Peintures_MI_1121_-_apr%C3%A8s_restauration_2024.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 244, rank: null, museumOnly: true,
    title: "La Belle Jardinière",
    artist: "Raphael",
    year: "c. 1507–1508",
    medium: "Oil on panel",
    dimensions: "122 × 80 cm",
    description: "Raphael painted this Virgin in a meadow during his Florentine period under Leonardo's influence, whose sfumato and gentle diffused light infuse the landscape. The Christ child and young John the Baptist interact with unselfconscious naturalism, their bodies modeled with sculptural precision. The painting was unfinished when Raphael left Florence for Rome; a workshop assistant completed the lower portion of Mary's robe.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/La_Vierge_%C3%A0_l'Enfant_avec_le_petit_saint_Jean_Baptiste_-_Rapha%C3%ABl_-_Mus%C3%A9e_du_Louvre_Peintures_INV_602_%3B_MR_433.jpg/330px-La_Vierge_%C3%A0_l'Enfant_avec_le_petit_saint_Jean_Baptiste_-_Rapha%C3%ABl_-_Mus%C3%A9e_du_Louvre_Peintures_INV_602_%3B_MR_433.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 245, rank: null, museumOnly: true,
    title: "Gabrielle d'Estrées and One of Her Sisters",
    artist: "School of Fontainebleau",
    year: "c. 1594",
    medium: "Oil on wood",
    dimensions: "96 × 125 cm",
    description: "One of the most enigmatic images in French painting: two nude women in a bath, one pinching the other's nipple in a gesture whose meaning has never been fully explained — possibly alluding to Gabrielle's pregnancy as the acknowledged mistress of Henry IV. The attendant in the background embroidering adds domestic intimacy to a scene that is simultaneously private and hieratic. The painter is entirely unknown.",
    movement: "Mannerism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Gabrielle_d'Estr%C3%A9es_et_une_de_ses_s%C5%93urs_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1937_1.jpg/330px-Gabrielle_d'Estr%C3%A9es_et_une_de_ses_s%C5%93urs_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1937_1.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 246, rank: null, museumOnly: true,
    title: "The Fortune Teller",
    artist: "Caravaggio",
    year: "c. 1595",
    medium: "Oil on canvas",
    dimensions: "93 × 131 cm",
    description: "One of Caravaggio's first genre paintings, this small work is a founding document of Italian Baroque naturalism: a gypsy woman tells the fortune of a young man while simultaneously stealing his ring — a glinting demonstration that seeing and understanding are not the same thing. The Louvre version is slightly more refined than the earlier Capitoline version and may have been made for a different patron. Caravaggio reputedly painted from a live street model.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Fortune_Teller-Caravaggio_(Louvre).jpg/330px-The_Fortune_Teller-Caravaggio_(Louvre).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 247, rank: null, museumOnly: true,
    title: "Et in Arcadia Ego",
    artist: "Nicolas Poussin",
    year: "c. 1637–1638",
    medium: "Oil on canvas",
    dimensions: "85 × 121 cm",
    description: "Poussin's second treatment of this Latin inscription — 'Even in Arcadia, I am there,' death speaking from a tomb in paradise — shifted the tone from his earlier version's shock to a philosophical meditation. The shepherds examine the words with quiet calm, and a shadow falls across one shepherd's arm in a final touch of memento mori. This painting became the visual touchstone for 18th-century meditations on mortality, beauty, and time.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Nicolas_Poussin_-_Et_in_Arcadia_ego_(deuxi%C3%A8me_version).jpg/330px-Nicolas_Poussin_-_Et_in_Arcadia_ego_(deuxi%C3%A8me_version).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 248, rank: null, museumOnly: true,
    title: "Women of Algiers in Their Apartment",
    artist: "Eugène Delacroix",
    year: "1834",
    medium: "Oil on canvas",
    dimensions: "180 × 229 cm",
    description: "Delacroix painted this after a rare visit inside a private Algerian home during the French occupation — a privilege almost no Westerner had been granted — capturing the women with an immediacy that set his Orientalist imagery apart from fantasy. The odalisque genre here is intimate rather than erotic, focused on light, textile, and gesture. Picasso revisited this painting obsessively, producing 15 variations in 1954–55.",
    movement: "Romanticism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Les_Femmes_d'Alger_d'Eug%C3%A8ne_Delacroix_(Restaur%C3%A9).jpg/330px-Les_Femmes_d'Alger_d'Eug%C3%A8ne_Delacroix_(Restaur%C3%A9).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 249, rank: null, museumOnly: true,
    title: "Virgin of Chancellor Rolin",
    artist: "Jan van Eyck",
    year: "c. 1430–1435",
    medium: "Oil on panel",
    dimensions: "66 × 62 cm",
    description: "Nicolas Rolin, chancellor of Burgundy, commissioned this altarpiece and placed himself on equal visual footing with the Virgin and Child — a bold act of self-promotion barely veiled behind piety. Van Eyck opened the room onto a minutely detailed Flemish city where tiny figures walk battlements above a river. Every surface — brocade, marble, tile — is a demonstration of oil paint's capacity to describe the material world.",
    movement: "Northern Renaissance",
    imageUrl: null,
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 250, rank: null, museumOnly: true,
    title: "Portrait of Louis XIV",
    artist: "Hyacinthe Rigaud",
    year: "1701",
    medium: "Oil on canvas",
    dimensions: "277 × 194 cm",
    description: "Commissioned as a gift for Louis's grandson Philip V of Spain, this portrait was so admired that the king kept the original and sent a copy. The 62-year-old monarch in full coronation regalia — ermine cloak, crown, scepter — strikes a classical contrapposto that gives the elderly king the stance of a warrior-god. It set the template for royal portraiture that would endure across Europe for a century.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Louis_XIV_of_France.jpg/330px-Louis_XIV_of_France.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 251, rank: null, museumOnly: true,
    title: "Man with a Glove",
    artist: "Titian",
    year: "c. 1520",
    medium: "Oil on canvas",
    dimensions: "100 × 89 cm",
    description: "This portrait of an unidentified Venetian nobleman is among the finest Renaissance portraits in any collection — the sitter's inner life barely contained by the controlled formality of his pose. The glove he holds, only half put on, gives the hands something to do while suggesting a worldly readiness that animates the whole canvas. Its origin in the Gonzaga collection in Mantua means it passed through the grandest European collections before reaching the Louvre.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Tiziano_-_Hombre_del_guante_(Louvre).jpg/330px-Tiziano_-_Hombre_del_guante_(Louvre).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 252, rank: null, museumOnly: true,
    title: "The Card Sharp with the Ace of Diamonds",
    artist: "Georges de La Tour",
    year: "c. 1636–1638",
    medium: "Oil on canvas",
    dimensions: "106 × 146 cm",
    description: "De La Tour's card sharp retrieves a winning card from behind his back while his female accomplice signals their mark — a well-dressed young man who has no idea he is being fleeced. The painting is simultaneously a moral lesson about the three temptations (gambling, wine, and lust) and a bravura exercise in the rendering of silk, velvet, and shadow. The Louvre purchased it in 1972 after it had been misattributed for centuries.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Le_Tricheur_%C3%A0_l'as_de_carreau_-_Georges_de_La_Tour_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1972_8.jpg/330px-Le_Tricheur_%C3%A0_l'as_de_carreau_-_Georges_de_La_Tour_-_Mus%C3%A9e_du_Louvre_Peintures_RF_1972_8.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 253, rank: null, museumOnly: true,
    title: "Portrait of Anne of Cleves",
    artist: "Hans Holbein the Younger",
    year: "1539",
    medium: "Oil and tempera on parchment on canvas",
    dimensions: "65 × 48 cm",
    description: "Henry VIII sent Holbein to paint this betrothal portrait; the artist so flattered his subject — and the elaborate costume so concealed her figure — that Henry was bitterly disappointed when they met. The marriage lasted six months before annulment, and Henry blamed Holbein. A 2021 restoration revealed previously obscured jewel details and confirmed this as one of the finest portrait miniatures on parchment ever made.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Portrait_Anne_of_Cleves_by_Hans_Holbein_the_Younger_(Louvre).jpg/330px-Portrait_Anne_of_Cleves_by_Hans_Holbein_the_Younger_(Louvre).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 254, rank: null, museumOnly: true,
    title: "The Arrival of Marie de Medici at Marseille",
    artist: "Peter Paul Rubens",
    year: "c. 1622–1625",
    medium: "Oil on canvas",
    dimensions: "394 × 295 cm",
    description: "One panel of the 24-painting Medici Cycle commissioned to decorate the Luxembourg Palace, this scene of the queen's 1600 arrival in France deploys Neptune, Fame, and water nymphs to elevate a diplomatic event into myth. Rubens and his vast workshop completed the entire cycle in just four years, and the full ensemble — now hanging together in the Louvre — remains the most ambitious decorative painting program of the 17th century.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Le_D%C3%A9barquement_de_la_reine_%C3%A0_Marseille%2C_le_3_novembre_1600_-_Pierre_Paul_Rubens_-_Mus%C3%A9e_du_Louvre_Peintures_INV_1774_%3B_MR_965.jpg/330px-Le_D%C3%A9barquement_de_la_reine_%C3%A0_Marseille%2C_le_3_novembre_1600_-_Pierre_Paul_Rubens_-_Mus%C3%A9e_du_Louvre_Peintures_INV_1774_%3B_MR_965.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 255, rank: null, museumOnly: true,
    title: "Portrait of Madame Récamier",
    artist: "Jacques-Louis David",
    year: "1800",
    medium: "Oil on canvas",
    dimensions: "174 × 224 cm",
    description: "David began this portrait of the celebrated Parisian salon hostess but abandoned it unfinished when she grew impatient and turned to his rival Gérard instead. The unfinished state — empty background, sketchy passages — became integral to the painting's appeal, and the severe neoclassical staging, bare-armed figure on a Directoire sofa looking back over her shoulder, was instantly iconic. Ingres drew directly on this composition for the Grande Odalisque fourteen years later.",
    movement: "Neoclassicism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Juliette_R%C3%A9camier%2C_n%C3%A9e_Bernard_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3708.jpg/330px-Juliette_R%C3%A9camier%2C_n%C3%A9e_Bernard_-_Jacques-Louis_David_-_Mus%C3%A9e_du_Louvre_Peintures_INV_3708.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 256, rank: null, museumOnly: true,
    title: "La Belle Ferronnière",
    artist: "Leonardo da Vinci",
    year: "c. 1490–1496",
    medium: "Oil on walnut panel",
    dimensions: "62 × 44 cm",
    description: "The identity of this half-length portrait — named after the ferronnière headband she wears — has been debated for centuries, with candidates including Lucrezia Crivelli and Beatrice d'Este. Leonardo's handling of the eyes, which glance slightly to the side of the viewer, creates the same uncanny presence as the Mona Lisa in a more intimate format. A court case in the 1920s over attribution ended in confirmation of Leonardo's hand.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/La_Belle_Ferronni%C3%A8re_-_Google_Arts.jpg/330px-La_Belle_Ferronni%C3%A8re_-_Google_Arts.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 257, rank: null, museumOnly: true,
    title: "The Ship of Fools",
    artist: "Hieronymus Bosch",
    year: "c. 1490–1500",
    medium: "Oil on panel",
    dimensions: "58 × 33 cm",
    description: "A fragment of a larger triptych, this small panel shows a boatload of revelers — a monk and nun prominently among them — adrift with no captain, celebrating as their vessel drifts toward destruction. Bosch drew on Sebastian Brant's 1494 satirical poem of the same name, transforming literary critique into hallucinatory vividness. The bottom third of the original panel belongs to Yale University Art Gallery under the title Allegory of Gluttony.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Jheronimus_Bosch_011.jpg/330px-Jheronimus_Bosch_011.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 258, rank: null, museumOnly: true,
    title: "Supper at Emmaus",
    artist: "Rembrandt van Rijn",
    year: "1648",
    medium: "Oil on mahogany panel",
    dimensions: "68 × 65 cm",
    description: "In this intimate panel, the resurrected Christ reveals himself to the disciples through the breaking of bread — captured not through dramatic gesture but in the subtle turn of his face into light and the disciple's hands clasped in sudden prayer. Rembrandt stripped away baroque theatricality to achieve something unbearably quiet. The back-lit Christ is one of the most moving treatments of this subject in Western painting.",
    movement: "Dutch Golden Age",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Rembrandt_The_Supper_at_Emmaus.jpg/330px-Rembrandt_The_Supper_at_Emmaus.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 259, rank: null, museumOnly: true,
    title: "Saint Sebastian Tended by Saint Irene",
    artist: "Georges de La Tour",
    year: "c. 1645–1650",
    medium: "Oil on canvas",
    dimensions: "167 × 130 cm",
    description: "Saint Irene tends to the wounded Sebastian by candlelight, her face and hands bathed in the warm glow that was de La Tour's visual signature. Unlike the traditional martyrdom image — Sebastian tied to a post, pierced with arrows — de La Tour removes the arrows and focuses on the intimacy of care, transforming a martyrdom into a scene of human tenderness. The candlelight, held by an attendant just outside the frame, is the painting's sole light source.",
    movement: "Baroque",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Georges_de_La_Tour_-_St_Sebastien_Attended_by_St_Irene_-_WGA12342.jpg/330px-Georges_de_La_Tour_-_St_Sebastien_Attended_by_St_Irene_-_WGA12342.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 260, rank: null, museumOnly: true,
    title: "Portrait of Francis I",
    artist: "Jean Clouet",
    year: "c. 1530",
    medium: "Oil on panel",
    dimensions: "96 × 74 cm",
    description: "Clouet's portrait of the French king who launched the Renaissance in France depicts a ruler of extraordinary presence — eyes direct, posture immovable, the slashed doublet a fortune in silk and gold. The modelling is so precise it appears closer to a portrait miniature than an oil panel, reflecting Clouet's Flemish training. Francis I was the patron who brought Leonardo to France; he reportedly held the dying artist's head at Amboise in 1519.",
    movement: "Northern Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Jean_Clouet_-_Portrait_of_Fran%C3%A7ois_I%2C_King_of_France_-_WGA5081.jpg/330px-Jean_Clouet_-_Portrait_of_Fran%C3%A7ois_I%2C_King_of_France_-_WGA5081.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 261, rank: null, museumOnly: true,
    title: "Saint Sebastian",
    artist: "Andrea Mantegna",
    year: "c. 1480",
    medium: "Tempera on canvas",
    dimensions: "255 × 140 cm",
    description: "The largest of Mantegna's three treatments of this subject, the Louvre Sebastian presents the martyr against a ruined classical arch — a humanist meditation on Christianity's supersession of the ancient world, rendered with almost sculptural conviction. The body is painted with archaeological precision, muscles compressed against the column like a Roman statue. Mantegna inscribed his name in Greek below the figure, claiming this as a proudly self-conscious masterwork.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Andrea_mantegna%2C_san_sebastiano%2C_1480_ca..JPG/330px-Andrea_mantegna%2C_san_sebastiano%2C_1480_ca..JPG",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },
  {
    id: 262, rank: null, museumOnly: true,
    title: "The Supper at Emmaus",
    artist: "Titian",
    year: "c. 1533–1534",
    medium: "Oil on canvas",
    dimensions: "169 × 244 cm",
    description: "Titian's large-scale treatment of the moment when the resurrected Christ reveals himself to the disciples through the breaking of bread is a masterwork of Venetian compositional grandeur, the figures animated by rich color and expressive gesture. It contrasts sharply with Rembrandt's much more intimate 1648 version of the same subject — also at the Louvre — demonstrating how differently two great masters could approach identical material across a century.",
    movement: "Italian Renaissance",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Salon_de_Mercure-LE_SOUPER_A_EMMAUS.jpg/330px-Salon_de_Mercure-LE_SOUPER_A_EMMAUS.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Louvre Museum" }
  },

  // ── MUSÉE D'ORSAY — museum-only paintings ─────────────────────────────
  {
    id: 263, rank: null, museumOnly: true,
    title: "The Balcony",
    artist: "Édouard Manet",
    year: "1868–1869",
    medium: "Oil on canvas",
    dimensions: "170 × 124 cm",
    description: "Manet reimagined Goya's Majas on a Balcony as a scene of modern Parisian life — but his figures are strangely disconnected, each absorbed in their own world. The woman seated at left is the painter Berthe Morisot, shown with an intensity that reveals the complex relationship between the two artists. The painting's flat, decorative handling and dissonant green shutters puzzled critics at the 1869 Salon.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg/330px-Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 264, rank: null, museumOnly: true,
    title: "The Fifer",
    artist: "Édouard Manet",
    year: "1866",
    medium: "Oil on canvas",
    dimensions: "160 × 97 cm",
    description: "Manet's study of a young military musician, painted after his transformative visit to the Prado, strips away conventional background and shadow to produce a figure that seems to float against a neutral void. The Salon jury rejected it in 1866; Émile Zola responded with a passionate public defense that launched his role as Manet's champion. The flat, shadow-free technique — borrowed directly from Velázquez — was as radical as anything being done in France at the time.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Manet%2C_Edouard_-_Young_Flautist%2C_or_The_Fifer%2C_1866_(2).jpg/330px-Manet%2C_Edouard_-_Young_Flautist%2C_or_The_Fifer%2C_1866_(2).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 265, rank: null, museumOnly: true,
    title: "Berthe Morisot with a Bouquet of Violets",
    artist: "Édouard Manet",
    year: "1872",
    medium: "Oil on canvas",
    dimensions: "55.5 × 40.5 cm",
    description: "One of about a dozen portraits Manet made of his sister-in-law Berthe Morisot, this small jewel uses an unusually asymmetric light — illuminating her right side brightly while the left falls into shadow — borrowed from Spanish portraiture. The barely visible violets and the black mourning dress give the painting emotional density out of proportion to its intimate size. Morisot herself acquired it in 1894; it only reached the Orsay in 1998.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Edouard_Manet_-_Berthe_Morisot_With_a_Bouquet_of_Violets_-_Google_Art_Project.jpg/330px-Edouard_Manet_-_Berthe_Morisot_With_a_Bouquet_of_Violets_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 266, rank: null, museumOnly: true,
    title: "On the Beach",
    artist: "Édouard Manet",
    year: "1873",
    medium: "Oil on canvas",
    dimensions: "60 × 73 cm",
    description: "Manet painted this en plein air at Berck-sur-Mer, showing his wife Suzanne and brother Eugène absorbed in reading against the flat grey sea and sky. Sand was later found embedded in the paint, proving it was made directly on the beach. The radical compression of foreground and horizon, with no middle distance, prefigures the compositional strategies of Post-Impressionism.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Edouard_Manet_-_On_the_Beach_-_Google_Art_Project.jpg/330px-Edouard_Manet_-_On_the_Beach_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 267, rank: null, museumOnly: true,
    title: "Portrait of Émile Zola",
    artist: "Édouard Manet",
    year: "1868",
    medium: "Oil on canvas",
    dimensions: "146.5 × 114 cm",
    description: "Manet painted this as a gift for Zola after the writer published a passionate defense of his work, and the painting is itself a theory of art hidden in a portrait. On the wall behind the writer hang a reproduction of Olympia, a print after Velázquez's Bacchus, and a Japanese print — Manet announcing his sources. The wall arrangement is as much manifesto as background.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Edouard_Manet_049.jpg/330px-Edouard_Manet_049.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 268, rank: null, museumOnly: true,
    title: "The Poppy Field",
    artist: "Claude Monet",
    year: "1873",
    medium: "Oil on canvas",
    dimensions: "50 × 65 cm",
    description: "Monet painted this near his home in Argenteuil with his wife Camille and son Jean as figures in the middle distance, repeated again in the foreground in a compositional rhyme he rarely used. The poppies dissolve from individual dabs of red into a collective haze — an early exercise in the perceptual abstraction that would culminate in the Water Lilies. Exhibited at the first Impressionist exhibition in 1874, it is now one of the most reproduced Impressionist paintings in the world.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Poppy_Field_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 269, rank: null, museumOnly: true,
    title: "Women in the Garden",
    artist: "Claude Monet",
    year: "1866",
    medium: "Oil on canvas",
    dimensions: "255 × 205 cm",
    description: "To paint the upper half of this enormous canvas en plein air, Monet dug a trench in the garden so he could lower it while maintaining a single viewpoint. All four figures were posed by Camille Doncieux, his future wife. The Salon of 1867 rejected it; Frédéric Bazille bought it from Monet on instalment to support him through a financial crisis.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Claude_Monet_024.jpg/330px-Claude_Monet_024.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 270, rank: null, museumOnly: true,
    title: "The Magpie",
    artist: "Claude Monet",
    year: "c. 1868–1869",
    medium: "Oil on canvas",
    dimensions: "89 × 130 cm",
    description: "Monet's largest snow scene renders a winter garden with luminous precision, its shadows in vivid blues and purples rather than grey — a revelation that electrified the Impressionist circle. The single magpie on a gate adds a scale-giving touch of black that snaps the whole composition into focus. Rejected by the Salon of 1869, it was acquired by the Orsay in 1984 and is now one of the collection's most beloved works.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg/330px-Claude_Monet_-_The_Magpie_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 271, rank: null, museumOnly: true,
    title: "Haystacks, End of Summer",
    artist: "Claude Monet",
    year: "1891",
    medium: "Oil on canvas",
    dimensions: "60 × 100 cm",
    description: "One of 25 paintings in Monet's Haystacks series, this canvas records the quality of late summer afternoon light that he found so fleeting he hired local girls to run canvases to him as the light changed. When exhibited together at Durand-Ruel's gallery in 1891, the series proved that a single motif could sustain an entire exhibition through purely atmospheric variation. Kandinsky later said seeing this series was his first experience of art that transcended its subject matter.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Haystacks%2C_end_of_Summer_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 272, rank: null, museumOnly: true,
    title: "The Swing",
    artist: "Pierre-Auguste Renoir",
    year: "1876",
    medium: "Oil on canvas",
    dimensions: "92 × 73 cm",
    description: "Renoir painted this in the garden behind his Montmartre studio, capturing the dappled light filtering through leaves onto the figures as scattered patches of yellow and white — a technique that scandalized academic critics, who saw only careless brushwork. Painted during the same summer as Bal du moulin de la Galette, it shares that painting's celebration of modern Parisian leisure. Gustave Caillebotte bought it directly from the third Impressionist exhibition in 1877.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Swing-Renoir.jpeg/330px-Swing-Renoir.jpeg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 273, rank: null, museumOnly: true,
    title: "Dance in the City",
    artist: "Pierre-Auguste Renoir",
    year: "1883",
    medium: "Oil on canvas",
    dimensions: "180 × 90 cm",
    description: "Commissioned as a pendant to Dance in the Country, this painting's couple — in evening dress, formal and controlled — embodies the bourgeois counterpart to the joyful spontaneity of its rural companion. The female figure is Suzanne Valadon, who later became a distinguished painter and mother of Maurice Utrillo. Together, the two dance paintings are a meditation on class, courtship, and the social geography of pleasure in 1880s Paris.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Pierre-Auguste_Renoir_019.jpg/330px-Pierre-Auguste_Renoir_019.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 274, rank: null, museumOnly: true,
    title: "Dance in the Country",
    artist: "Pierre-Auguste Renoir",
    year: "1883",
    medium: "Oil on canvas",
    dimensions: "180 × 90 cm",
    description: "Renoir's informal dancer in a straw hat — modeled by Aline Charigot, whom he later married — presses her partner with joyful abandon into an outdoor dance that feels genuinely spontaneous. Painted as the bourgeois companion to Dance in the City, this rural version privileges warmth, informality, and happiness over elegance. Both were commissioned by dealer Paul Durand-Ruel as a deliberate study in social contrast.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Pierre_Auguste_Renoir_-_Country_Dance_-_Google_Art_Project.jpg/330px-Pierre_Auguste_Renoir_-_Country_Dance_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 275, rank: null, museumOnly: true,
    title: "Young Girls at the Piano",
    artist: "Pierre-Auguste Renoir",
    year: "1892",
    medium: "Oil on canvas",
    dimensions: "116 × 90 cm",
    description: "Renoir painted five versions of this composition when the French government offered to purchase one for the Musée du Luxembourg — a rare official honor for an Impressionist. This Orsay version is the most resolved, its warm domestic light and absorbed figures capturing the bourgeois ideal of cultivated femininity that Renoir returned to throughout his career. The piano lesson as a subject would later attract Matisse.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Auguste_Renoir_-_Young_Girls_at_the_Piano_-_Google_Art_Project.jpg/330px-Auguste_Renoir_-_Young_Girls_at_the_Piano_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 276, rank: null, museumOnly: true,
    title: "The Floor Scrapers",
    artist: "Gustave Caillebotte",
    year: "1875",
    medium: "Oil on canvas",
    dimensions: "102 × 146.5 cm",
    description: "Caillebotte applied the Impressionist approach to a subject the Salon found shockingly vulgar: working-class men scraping a hardwood floor bare-chested in what is believed to be his own studio. The painting was rejected by the Salon of 1875 for treating a labor subject with the monumental scale reserved for history painting. Exhibited with the Impressionists in 1876, it is now recognized as a masterwork of urban realism.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg/330px-Gustave_Caillebotte_-_The_Floor_Planers_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 277, rank: null, museumOnly: true,
    title: "The Circus",
    artist: "Georges Seurat",
    year: "1890–1891",
    medium: "Oil on canvas",
    dimensions: "185 × 152 cm",
    description: "Seurat's final painting, left unfinished at his death aged 31 in March 1891, transposes his Pointillist technique to the electric atmosphere of the Cirque Fernando. The formal daring is extraordinary: the flying acrobat, prancing horse, and clown break the severe geometry of his earlier work into dynamic diagonals. The unfinished white border visible on three sides is now considered part of the work.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Georges_Seurat%2C_1891%2C_Le_Cirque_(The_Circus)%2C_oil_on_canvas%2C_185_x_152_cm%2C_Mus%C3%A9e_d'Orsay.jpg/330px-Georges_Seurat%2C_1891%2C_Le_Cirque_(The_Circus)%2C_oil_on_canvas%2C_185_x_152_cm%2C_Mus%C3%A9e_d'Orsay.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 278, rank: null, museumOnly: true,
    title: "The Card Players",
    artist: "Paul Cézanne",
    year: "c. 1894–1895",
    medium: "Oil on canvas",
    dimensions: "47.5 × 57 cm",
    description: "The smallest and most refined of Cézanne's five Card Players canvases, this version reduces the composition to its geometric essence: two men absorbed in their game, the space between them alive with formal tension. Meyer Schapiro called it 'the most monumental and also the most refined' of the series. The pose of the left figure — elbow on table, pipe in mouth — became one of the most influential compositional ideas in early 20th-century painting.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg/330px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 279, rank: null, museumOnly: true,
    title: "Still Life with Apples and Oranges",
    artist: "Paul Cézanne",
    year: "c. 1899",
    medium: "Oil on canvas",
    dimensions: "74 × 93 cm",
    description: "Cézanne arranged the same cloth, pitcher, and fruit in ever more complex configurations throughout his career, treating the still life as a laboratory for pictorial structure. Here the crumpled white cloth in angular folds competes for attention with the fruit it displays — each apple and orange built up through multiple simultaneous viewpoints. The painting entered the Louvre via the Camondo bequest in 1908 and transferred to the Orsay at its founding.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Nature_morte_aux_pommes_et_aux_oranges%2C_par_Paul_C%C3%A9zanne.jpg/330px-Nature_morte_aux_pommes_et_aux_oranges%2C_par_Paul_C%C3%A9zanne.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 280, rank: null, museumOnly: true,
    title: "Tahitian Women on the Beach",
    artist: "Paul Gauguin",
    year: "1891",
    medium: "Oil on canvas",
    dimensions: "69 × 91 cm",
    description: "Painted in Gauguin's first months in Tahiti, this early work already shows his Synthetist approach: the two women are rendered with simplified ornamental forms and a palette of warm ochres and flat pinks that owe nothing to naturalistic light. The figures' self-contained stillness — the aloof indolence Gauguin admired in Polynesian life — gives the image the quality of an icon rather than a genre scene. It was among the works he brought back for the controversial 1893 Paris exhibition that made his Pacific work famous.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Paul_Gauguin_056.jpg/330px-Paul_Gauguin_056.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 281, rank: null, museumOnly: true,
    title: "The White Horse",
    artist: "Paul Gauguin",
    year: "1898",
    medium: "Oil on canvas",
    dimensions: "140 × 91.5 cm",
    description: "Gauguin's largest Tahitian canvas presents a white horse drinking from a pool in a jungle setting where riders pass like shadows in filtered green light — an image of such otherworldly stillness that it reads simultaneously as observed nature and transcribed myth. The pharmacist who commissioned it rejected the painting because the horse appeared green; Gauguin refused to adjust the color, insisting the greenish cast was essential. The Orsay acquired it from the painter Gustave Fayet's estate.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Paul_Gauguin_-_The_White_Horse_-_Google_Art_Project.jpg/330px-Paul_Gauguin_-_The_White_Horse_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 282, rank: null, museumOnly: true,
    title: "The Cradle",
    artist: "Berthe Morisot",
    year: "1872",
    medium: "Oil on canvas",
    dimensions: "56 × 46 cm",
    description: "Morisot's most celebrated painting shows her sister Edma gazing at her sleeping daughter Blanche through the translucent veil of the cradle canopy — a curtain of white gauze that demonstrates Morisot's mastery of soft, airy handling. Shown at the first Impressionist exhibition in 1874, it remains the most famous work by any woman artist of the Impressionist circle. The tenderness of the gaze and the delicacy of the textile handling are characteristic signatures.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Berthe_Morisot_008.jpg/330px-Berthe_Morisot_008.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 283, rank: null, museumOnly: true,
    title: "The Birth of Venus",
    artist: "William-Adolphe Bouguereau",
    year: "1879",
    medium: "Oil on canvas",
    dimensions: "300 × 218 cm",
    description: "Bouguereau's massive Venus — technically astounding, with fifteen encircling putti and nymphs in flawless academic illusionism — was precisely what the Impressionists rebelled against: a museum-bound mythology of impossible perfection. During his lifetime it commanded the highest Salon prices; after his death it was dismissed as academic confectionery. Its revival since the 1980s has repositioned it as a major work of the academic tradition and one of the Orsay's most visited canvases.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/William-Adolphe_Bouguereau_(1825-1905)_-_The_Birth_of_Venus_(1879).jpg/330px-William-Adolphe_Bouguereau_(1825-1905)_-_The_Birth_of_Venus_(1879).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 284, rank: null, museumOnly: true,
    title: "The Ballet Class",
    artist: "Edgar Degas",
    year: "c. 1871–1874",
    medium: "Oil on canvas",
    dimensions: "85 × 75 cm",
    description: "One of Degas's earliest treatments of the ballet class that would occupy him for decades, showing the choreographer Jules Perrot supervising practice with his stick — a figure rendered with magisterial authority. The spatial compression, with dancers in foreground and background simultaneously, is already fully developed. This intimate canvas established the vocabulary Degas would explore in hundreds of subsequent works.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Edgar_Degas_-_La_Classe_de_danse.jpg/330px-Edgar_Degas_-_La_Classe_de_danse.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 285, rank: null, museumOnly: true,
    title: "The Tub",
    artist: "Edgar Degas",
    year: "1886",
    medium: "Pastel on cardboard",
    dimensions: "60 × 83 cm",
    description: "Degas exhibited this pastel at the final Impressionist exhibition of 1886 as part of a series of nudes in private acts of bathing and grooming — women he described as 'seen through a keyhole,' unconscious of any observer. The abrupt cropping and the tabletop cutting across the corner give the image the accidental intimacy of a photograph taken from above. Critics responded with a mix of admiration for the technique and unease at the voyeuristic premise.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Edgar_Degas_-_Le_Tub_(1886_Mus%C3%A9e_d'Orsay).jpg/330px-Edgar_Degas_-_Le_Tub_(1886_Mus%C3%A9e_d'Orsay).jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 286, rank: null, museumOnly: true,
    title: "L'Étoile (The Star)",
    artist: "Edgar Degas",
    year: "c. 1876–1877",
    medium: "Pastel on monotype",
    dimensions: "58 × 44 cm",
    description: "Degas's most famous single dance image catches a ballerina mid-performance, her tutu exploding in white light while her male escort lurks in shadow at the right edge — a composition of brilliant asymmetry. The technique of pastel over monotype creates extraordinary luminosity, the black oil ink of the monotype giving the shadows a depth that pure pastel cannot achieve. This is the image most people picture when they think of Degas.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Ballet_(L'%C3%89toile)%2C_Edgar_Degas.jpg/330px-Ballet_(L'%C3%89toile)%2C_Edgar_Degas.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 287, rank: null, museumOnly: true,
    title: "A Burial at Ornans",
    artist: "Gustave Courbet",
    year: "1849–1850",
    medium: "Oil on canvas",
    dimensions: "315 × 660 cm",
    description: "Courbet painted a small-town funeral in Franche-Comté at the scale traditionally reserved for history painting — fifty life-sized provincial figures, a priest, gravedigger, and the horizon of the Jura hills behind them — and exhibited it at the 1851 Salon to outrage and ridicule. The bourgeoisie saw an insult; the provincial dignity of these ordinary faces was evidence of vulgarity. It is now considered the founding work of French Realism.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg/330px-Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project_2.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 288, rank: null, museumOnly: true,
    title: "The Painter's Studio",
    artist: "Gustave Courbet",
    year: "1854–1855",
    medium: "Oil on canvas",
    dimensions: "361 × 598 cm",
    description: "Courbet's enormous allegory — subtitled 'A Real Allegory Summing Up Seven Years of My Artistic and Moral Life' — shows the artist at his canvas flanked by the exploited poor to his left and his intellectual friends (including Baudelaire and Proudhon) to his right. Rejected for the 1855 Exposition Universelle, Courbet mounted it in his own pavilion outside — the first private exhibition in art history. No painting better announces the Realist movement's grand ambitions.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Courbet_LAtelier_du_peintre.jpg/330px-Courbet_LAtelier_du_peintre.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 289, rank: null, museumOnly: true,
    title: "The Origin of the World",
    artist: "Gustave Courbet",
    year: "1866",
    medium: "Oil on canvas",
    dimensions: "46 × 55 cm",
    description: "Commissioned by the Ottoman diplomat Halil Şerif Pasha, this small and frankly explicit painting applies Realism's founding conviction — paint only what you can see — to a subject that art had always veiled in allegory. It passed through several secret collections, including that of the psychoanalyst Jacques Lacan, who kept it hidden behind another painting, and only entered the Orsay in 1995. Its frank title, given by Courbet himself, remains the most provocative in art history.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Origin-of-the-World.jpg/330px-Origin-of-the-World.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 290, rank: null, museumOnly: true,
    title: "Bedroom in Arles",
    artist: "Vincent van Gogh",
    year: "1889",
    medium: "Oil on canvas",
    dimensions: "57.5 × 74 cm",
    description: "The third version of Van Gogh's famous bedroom was painted from memory at the Saint-Paul asylum after the original was damaged by flooding. He described the colors as intended to convey absolute rest: walls pale lilac, floor red tiles, bed and chairs butter yellow. The deliberate thick outlines and flat areas of color, which he associated with Japanese prints, make this one of his purest Post-Impressionist statements.",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Vincent_van_Gogh_-_Van_Gogh's_Bedroom_in_Arles_-_Google_Art_Project.jpg/330px-Vincent_van_Gogh_-_Van_Gogh's_Bedroom_in_Arles_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  {
    id: 291, rank: null, museumOnly: true,
    title: "The Church at Auvers",
    artist: "Vincent van Gogh",
    year: "1890",
    medium: "Oil on canvas",
    dimensions: "94 × 74.5 cm",
    description: "Painted six weeks before Van Gogh's death, this view of the medieval church at Auvers-sur-Oise renders the building's stone in colors that register the artist's psychological state: the sky an agitated cobalt, the paths forking around the church as if avoiding its entrance. The absence of visible windows gives the building a blind, impenetrable quality. Van Gogh described it in a letter as appearing in colors that are 'pure cobalt blue against a simple and deep blue sky.'",
    movement: "Post-Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg/330px-Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "France", city: "Paris", museum: "Musée d'Orsay" }
  },
  // ── MUSEO NACIONAL CENTRO DE ARTE REINA SOFÍA — museum-only paintings ───
  {
    id: 292, rank: null, museumOnly: true,
    title: "House with Palm Tree",
    artist: "Joan Miró",
    year: "1918",
    medium: "Oil on canvas",
    dimensions: "65 × 73 cm",
    description: "Painted during Miró's recovery from typhoid at his family farm in Mont-roig, this early canvas absorbs Cézanne and Fauvism while remaining rooted in careful observation of the Catalan landscape. The compressed space, flat planes of color, and intensely observed botanical detail give it the feel of a medieval tapestry rather than a plein-air study. It marks the start of Miró's lifelong attachment to his homeland as the central subject of his art.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Joan_Mir%C3%B3%2C_1918%2C_La_casa_de_la_palmera_(House_with_Palm_Tree)%2C_oil_on_canvas%2C_65_x_73_cm%2C_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa.jpg/330px-Joan_Mir%C3%B3%2C_1918%2C_La_casa_de_la_palmera_(House_with_Palm_Tree)%2C_oil_on_canvas%2C_65_x_73_cm%2C_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 293, rank: null, museumOnly: true,
    title: "Snail, Woman, Flower, Star",
    artist: "Joan Miró",
    year: "1934",
    medium: "Oil on canvas",
    dimensions: "195 × 172 cm",
    description: "One of Miró's celebrated 'wild paintings' of the mid-1930s, conceived as a model for a tapestry and commissioned by collector Marie Cuttoli, this large canvas emerged from Miró's growing anxiety about fascism in Spain. The organic forms that share space with the lyrical words of the title carry an undercurrent of biological menace. Despite associations with automatism, Miró planned every element through meticulous preparatory sketches.",
    movement: "Surrealism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 294, rank: null, museumOnly: true,
    title: "Woman, Bird, Star (Homage to Pablo Picasso)",
    artist: "Joan Miró",
    year: "1966–1973",
    medium: "Oil on canvas",
    dimensions: "170 × 245 cm",
    description: "Miró began this large canvas in 1966 and finished it on the day Picasso died in April 1973, immediately dedicating it to his lifelong friend. The woman, bird, and star — the three recurring symbols of Miró's late work — are rendered in primary colors on a field of flat black, asserting life against loss with deliberate simplicity. The Reina Sofía acquired it in 1988.",
    movement: "Surrealism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 295, rank: null, museumOnly: true,
    title: "Violin and Guitar",
    artist: "Juan Gris",
    year: "1913",
    medium: "Oil on canvas",
    dimensions: "81 × 60 cm",
    description: "One of Gris's most polished early Cubist canvases, this work translates the Analytic Cubism of Braque and Picasso into a more formally precise and coloristically structured language. Gris arranges the fragments of violin and guitar along a diagonal axis that gives the composition clarity even as the instruments dissolve into interlocking planes. It was exhibited at the Section d'Or in Paris where Gris first established his reputation alongside his older contemporaries.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Juan_Gris_-_Violon_et_guitare_-_Google_Art_Project.jpg/330px-Juan_Gris_-_Violon_et_guitare_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 296, rank: null, museumOnly: true,
    title: "The Anisette Bottle",
    artist: "Juan Gris",
    year: "1914",
    medium: "Oil and papier collé on canvas",
    dimensions: "46 × 38 cm",
    description: "Gris chooses as his subject a bottle of Anís del Mono — the distinctively labeled Spanish anise liqueur — and uses papier collé alongside painted passages to embed the work's geography into its surface. The label's text and the pasted newspaper fragments become as compositionally significant as the bottle's form. It is one of the most self-consciously Spanish of his Parisian canvases, a small but exact statement of cultural identity.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Juan_Gris_-_La_bouteille_d'anis_-_Google_Art_Project.jpg/330px-Juan_Gris_-_La_bouteille_d'anis_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 297, rank: null, museumOnly: true,
    title: "Coffee Grinder, Cup and Glass on a Table",
    artist: "Juan Gris",
    year: "1915",
    medium: "Oil on canvas",
    dimensions: "29 × 46 cm",
    description: "Gris pares the Cubist still life down to its essentials: a coffee grinder, cup, and glass arranged on a tilted tabletop that simultaneously recedes into depth and flattens into pattern. The cool grey and ochre palette is typical of his Synthetic Cubist period, where he no longer fractured objects but reassembled them from independent color planes. At barely larger than a sheet of paper, it is Cubism operating at the scale of a meditation.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Juan_Gris_-_Moulin_%C3%A0_caf%C3%A9%2C_tasse_et_verre_sur_une_table_-_Google_Art_Project.jpg/330px-Juan_Gris_-_Moulin_%C3%A0_caf%C3%A9%2C_tasse_et_verre_sur_une_table_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 298, rank: null, museumOnly: true,
    title: "Coffee Mill",
    artist: "Juan Gris",
    year: "1920",
    medium: "Oil on canvas",
    dimensions: "60 × 81 cm",
    description: "By 1920 Gris had moved into a more lyrical phase of Cubism, using softer curves and richer color to animate his familiar cast of café objects. The coffee mill becomes a quasi-portrait: stable, dignified, occupying the canvas with a presence out of proportion to its domestic insignificance. Like Chardin's still lifes before him, Gris makes the ordinary monumental through the seriousness of his attention.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Juan_Gris_-_Le_moulin_%C3%A0_caf%C3%A9_-_Google_Art_Project.jpg/330px-Juan_Gris_-_Le_moulin_%C3%A0_caf%C3%A9_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 299, rank: null, museumOnly: true,
    title: "Open Window",
    artist: "Juan Gris",
    year: "1921",
    medium: "Oil on canvas",
    dimensions: "66 × 100 cm",
    description: "Gris uses a window to organize two spatial worlds — interior and exterior — into a single flat surface of rhyming color planes, with the view through the glass introducing sky, sea, and architectural fragments that mirror the objects on the windowsill. Apollinaire's praise for Gris as 'the most rigorous' of the Cubists finds its justification in the structural logic of this painting. It is among the finest of his post-1920 works.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Juan_Gris_-_La_fen%C3%AAtre_ouverte_-_Google_Art_Project.jpg/330px-Juan_Gris_-_La_fen%C3%AAtre_ouverte_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 300, rank: null, museumOnly: true,
    title: "Carafe and Book",
    artist: "Juan Gris",
    year: "1920",
    medium: "Oil on canvas",
    dimensions: "81.3 × 54 cm",
    description: "A carafe of water and an open book — the most cerebral of Gris's domestic companions — are arranged into an austere vertical composition that reads as much as architecture as still life. The tipped table plane and the carafe's translucency allow Gris to showcase his approach to depicting transparency through color logic rather than tonal gradation. This is among the major works Gris kept to maintain a presence in his homeland.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Juan_Gris%2C_1910-1927_-_Carafe_et_livre_-_Google_Art_Project.jpg/330px-Juan_Gris%2C_1910-1927_-_Carafe_et_livre_-_Google_Art_Project.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 301, rank: null, museumOnly: true,
    title: "Young Woman at a Window",
    artist: "Salvador Dalí",
    year: "1925",
    medium: "Oil on cardboard",
    dimensions: "105 × 74.5 cm",
    description: "Dalí's sister Ana María, seen from behind at the window of the family home in Cadaqués overlooking the bay, is the most intimate image he ever made — before Gala arrived and his sister was displaced from his life. The painting belongs to his formative realist phase, influenced by Vermeer, and predates Surrealism entirely. When Dalí later insulted Ana María publicly, she never forgave him; this painting became a memorial to the relationship that shaped his early art.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Young_Woman_at_a_Window.jpg/330px-Young_Woman_at_a_Window.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 302, rank: null, museumOnly: true,
    title: "The Invisible Man",
    artist: "Salvador Dalí",
    year: "1929–1932",
    medium: "Oil on canvas",
    dimensions: "140 × 81 cm",
    description: "Begun the year Dalí first encountered Surrealism in Paris, this painting uses the double-image technique he would make his signature: a seated human figure is simultaneously readable as the architectural environment around it — clouds become a head, a body is assembled from arches and columns. The visible-invisible figure drew on Arcimboldo's composite heads and ancient Egyptian art. It was one of his first canvases to demonstrate the paranoiac-critical method he later theorized.",
    movement: "Surrealism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/The_Invisible_Man.jpg/330px-The_Invisible_Man.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 303, rank: null, museumOnly: true,
    title: "The Enigma of Hitler",
    artist: "Salvador Dalí",
    year: "c. 1939",
    medium: "Oil on canvas",
    dimensions: "51.2 × 79.3 cm",
    description: "Painted around the time of Dalí's expulsion from the Surrealist movement, this canvas depicts a dream of Hitler as a landscape of disconnected symbols: a cut telephone cord, a bat, a bowl of beans, and a small portrait photo melting into the void. Dalí related having recurring dreams about Hitler, which he interpreted as political premonitions; the painting was first shown in New York in 1939 at $1,750 but found no buyer.",
    movement: "Surrealism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 304, rank: null, museumOnly: true,
    title: "Dead Birds",
    artist: "Pablo Picasso",
    year: "1912",
    medium: "Oil on canvas",
    dimensions: "46 × 65 cm",
    description: "Two dead pigeons lie on a tabletop in this sober Cubist still life — a subject Picasso returned to throughout his career, connecting the humble genre of dead-game painting to something more meditative. By 1912 Picasso was deep in Analytic Cubism, and the birds dissolve into faceted planes that make identification part of the visual work. The Reina Sofía holds it as a foundational example of Picasso's pre-Synthetic period.",
    movement: "Cubism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 305, rank: null, museumOnly: true,
    title: "Head of a Young Woman",
    artist: "Pablo Picasso",
    year: "c. 1907",
    medium: "Oil on canvas",
    dimensions: "40 × 33 cm",
    description: "This transitional work sits on the threshold of Cubism, the face flattened into a mask-like reduction that owes a clear debt to the Iberian sculpture and African art Picasso was studying at the Trocadéro. The economy of means — a few flat planes of ochre and grey to suggest features — prefigures the radical simplification of Les Demoiselles d'Avignon, which Picasso was developing simultaneously. It is among the earliest examples of the new visual language he was constructing.",
    movement: "Cubism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 306, rank: null, museumOnly: true,
    title: "Garrote vil",
    artist: "Ramon Casas",
    year: "1894",
    medium: "Oil on canvas",
    dimensions: "127 × 162.5 cm",
    description: "Casas witnessed the execution of Aniceto Peinador by garrotte in Barcelona in 1893 and painted this unflinching account the following year. A priest administers last rites on the left while the executioner tightens the iron collar, the crowd behind them an anonymous grey mass. When exhibited at the National Exhibition of Fine Arts in 1895 it won third prize and was purchased by the state, cementing Casas's reputation as the leading voice of Spanish Social Realism.",
    movement: "Realism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Garrote_vil%2C_de_Ram%C3%B3n_Casas.jpg/330px-Garrote_vil%2C_de_Ram%C3%B3n_Casas.jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 307, rank: null, museumOnly: true,
    title: "Interior at Outdoors",
    artist: "Ramon Casas",
    year: "1892",
    medium: "Oil on canvas",
    dimensions: "160 × 119 cm",
    description: "A young woman sits reading in the dappled shade of an outdoor café or garden, absorbed and oblivious to the painter's gaze — a scene of modern bourgeois leisure rendered with the loose, light-filled brushwork Casas absorbed during his years in Paris. His mastery of Impressionist technique in a Spanish key, and his sensitivity to women in the new public spaces of urban modernity, established him as the leading Catalan Impressionist.",
    movement: "Impressionism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Interior_at_Outdoors_by_Ramon_Casas_i_Carbo%2C_1892_AD%2C_oil_on_canvas_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_-_DSC08746.JPG/330px-Interior_at_Outdoors_by_Ramon_Casas_i_Carbo%2C_1892_AD%2C_oil_on_canvas_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_-_DSC08746.JPG",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 308, rank: null, museumOnly: true,
    title: "Portrait of Tristan Tzara",
    artist: "Robert Delaunay",
    year: "1923",
    medium: "Oil on paperboard",
    dimensions: "104.5 × 75 cm",
    description: "The Dada poet Tristan Tzara sits in three-quarter view, his monocle glinting, a vivid orange scarf — made by Sonia Delaunay using simultaneist color theory — dominating the composition. Delaunay uses the scarf as a vehicle for his Orphist color experiments while keeping the portrait's psychological charge intact. The Delaunays and Tzara were close friends within the same avant-garde Paris circle, and this double portrait of sitter and textile is also a document of that friendship.",
    movement: "Modernism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Retrato_de_Tristan_Tzara_(Robert_Delaunay).jpg/330px-Retrato_de_Tristan_Tzara_(Robert_Delaunay).jpg",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 309, rank: null, museumOnly: true,
    title: "Totalizer",
    artist: "Francis Picabia",
    year: "1922",
    medium: "Ink and watercolor on paper",
    dimensions: "55 × 73 cm",
    description: "After his Dada period, Picabia pivoted to mechanomorphic abstraction — this watercolor uses overlapping circles and arcs to suggest a betting or timing machine while draining the mechanism of any practical meaning. Form is evacuated of function; beauty is divorced from use. Exhibited at the Dalmau gallery in Barcelona in 1922, it helped introduce geometric abstraction to Spain.",
    movement: "Modernism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 310, rank: null, museumOnly: true,
    title: "Woman with a Fan",
    artist: "María Blanchard",
    year: "1916",
    medium: "Oil on canvas",
    dimensions: "100 × 72 cm",
    description: "Blanchard assembles the figure of a woman holding a fan from the overlapping geometric planes of Synthetic Cubism, but inflects the style with warmth and color saturation rarely found in Picasso or Braque. The fan becomes a visual counterpart to the Cubist faceting — both are artifacts of the same impulse to break and rearrange a unified surface. Blanchard was close friends with Juan Gris and Diego Rivera in Paris; her work deserves wider recognition.",
    movement: "Cubism",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Woman_with_a_Fan%2C_by_Maria_Blanchard%2C_1916%2C_oil_on_canvas_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_-_Madrid%2C_Spain_-_DSC08510.JPG/330px-Woman_with_a_Fan%2C_by_Maria_Blanchard%2C_1916%2C_oil_on_canvas_-_Museo_Nacional_Centro_de_Arte_Reina_Sof%C3%ADa_-_Madrid%2C_Spain_-_DSC08510.JPG",
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 311, rank: null, museumOnly: true,
    title: "Woman with Guitar",
    artist: "María Blanchard",
    year: "1917",
    medium: "Oil on canvas",
    dimensions: "100 × 72 cm",
    description: "The guitar was the emblematic Cubist instrument — analyzed, fractured, and reassembled by Braque and Picasso — and Blanchard takes up the motif in a canvas more decorative and emotionally warm than her male contemporaries' treatments. The figure and instrument are nearly fused, their geometry continuous, suggesting that for Blanchard the human body was as available to Cubist analysis as any object. Her work challenges the assumption that Cubism was exclusively a cold, masculine project.",
    movement: "Cubism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 312, rank: null, museumOnly: true,
    title: "The Gathering at the Café de Pombo",
    artist: "José Gutiérrez Solana",
    year: "1920",
    medium: "Oil on canvas",
    dimensions: "162 × 211 cm",
    description: "Solana's group portrait of the regular Wednesday tertulia at Madrid's Café de Pombo is the most iconic image of early 20th-century Spanish intellectual life — ten writers, poets, and artists rendered with raw, unflinching directness. The dark palette and hard staring faces recall Goya's group portraits more than the light-filled canvases of Modernism. Solana was himself a member of the tertulia, and his presence in the painting is both documentary and self-mythologizing.",
    movement: "Expressionism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 313, rank: null, museumOnly: true,
    title: "Portrait of Sonia Klamery",
    artist: "Hermenegildo Anglada Camarasa",
    year: "1913",
    medium: "Oil on canvas",
    dimensions: "220 × 150 cm",
    description: "Anglada Camarasa's monumental portrait of a young socialite showcases the decorative intensity that made him one of the most celebrated society painters in early 20th-century Europe. The canvas blazes with jeweled color — influenced by the Vienna Secession and Klimt — and the figure is nearly overwhelmed by the ornamental richness of setting and costume. His work bridges Spanish Modernisme and international Art Nouveau at their most opulent.",
    movement: "Art Nouveau",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 314, rank: null, museumOnly: true,
    title: "A World",
    artist: "Ángeles Santos",
    year: "1929",
    medium: "Oil on canvas",
    dimensions: "300 × 300 cm",
    description: "Painted at age 17, this enormous three-by-three-metre canvas presents a dreamlike cosmic panorama — planets, animals, figures, and mythological scenes packed into a visionary theatre — that astonished viewers at the 1929 Ibero-American Exposition. Santos had no formal training and painted from a state she described as 'fever or ecstasy.' It resists easy classification: too literal for Surrealism and too strange for realism, it remains one of the most astonishing debuts in the history of Spanish art.",
    movement: "Surrealism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 315, rank: null, museumOnly: true,
    title: "Lying Figure",
    artist: "Francis Bacon",
    year: "1959",
    medium: "Oil on canvas",
    dimensions: "198 × 142 cm",
    description: "A nude figure writhes on a bed in a compressed, low-ceilinged room — space and body equally distorted, equally under pressure. Bacon painted his lying figures throughout the late 1950s as studies in vulnerability, the body unguarded in sleep or pain, stripped of the social armor of upright posture. The smeared flesh tones and the isolation of the figure on an otherwise bare canvas are characteristic of his method of building form through erasure as much as application.",
    movement: "Expressionism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
  },
  {
    id: 316, rank: null, museumOnly: true,
    title: "Garrote",
    artist: "Francisco Goya",
    year: "c. 1778–1780",
    medium: "Oil on canvas",
    dimensions: "43 × 32 cm",
    description: "Goya's small oil of an execution by garrotte predates Ramon Casas's monumental 1894 treatment of the same subject by more than a century, making it one of the earliest Spanish paintings to address state violence with unflinching directness. The bound prisoner and the assembled onlookers are rendered in loose, rapid brushwork typical of Goya's sketch-like preparatory studies. The Reina Sofía's collection spans from Goya to the present day as an arc of Spanish art history.",
    movement: "Romanticism",
    imageUrl: null,
    location: { continent: "Europe", country: "Spain", city: "Madrid", museum: "Museo Nacional Centro de Arte Reina Sofía" }
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

/* ── Art Movements ───────────────────────────────────────────────────────── */
const MOVEMENTS = {
  "Italian Renaissance": {
    era: "c. 1400–1600",
    summary: "Born in Florence and spreading across Italy, the Renaissance — meaning 'rebirth' — revived classical Greco-Roman ideals of beauty, proportion, and humanism. Artists mastered linear perspective, anatomical accuracy, and sfumato (soft tonal blending). The movement produced history's most celebrated artworks, shifting painting from flat medieval symbolism to naturalistic, psychologically rich scenes.",
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
    summary: "Baroque painting embraced drama, movement, and emotional intensity as tools of persuasion — much of it commissioned by the Catholic Church after the Reformation. Caravaggio's revolutionary use of extreme light and shadow (tenebrism) redefined how painters depicted sacred scenes. Across Europe, Baroque artists transformed religious subjects into visceral human dramas, while French painters like Poussin favored a more restrained classical approach.",
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
    summary: "As industrialization transformed European society, Romanticism championed emotion, individualism, and the sublime power of nature. Romantic painters staged scenes of catastrophe, revolution, and awe — shipwrecks, uprisings, stormy seas — infusing them with drama and personal feeling. Goya's dark visions form a proto-Expressionist strain, while Turner dissolved natural scenes into pure atmosphere. Constable found the sublime in ordinary English fields.",
    traits: ["Intense emotion prioritized over rationality","Dramatic, catastrophic subjects","Sublime nature: storms, mountains, ruins","Bold color and energetic brushwork","Individual heroism, suffering, and freedom"],
    artists: ["Eugène Delacroix","Théodore Géricault","Francisco Goya","J.M.W. Turner","John Constable","Thomas Lawrence"]
  },
  "Realism": {
    era: "c. 1840–1880",
    summary: "Realism arose as a social manifesto: paint the world as it is, not as mythology or idealism would have it. French Realists depicted peasant labor, urban poverty, and ordinary people with unsentimental honesty. In America, Eakins brought the same unflinching eye to surgery and sport; Homer to the sea. The movement challenged art's traditional hierarchy of subjects — a laborer in a field deserved the same serious treatment as a Roman emperor.",
    traits: ["Ordinary people treated as worthy subjects","Unsentimental, truthful observation","Working-class and rural themes","Muted palette rejecting classical idealization","Documentary commitment to visible reality"],
    artists: ["Gustave Courbet","Jean-François Millet","Édouard Manet","Thomas Eakins","Winslow Homer","Camille Corot"]
  },
  "Impressionism": {
    era: "c. 1860–1890",
    summary: "Rejected by the Paris Salon, a group of painters began working outdoors (en plein air) to capture fleeting effects of light on a scene. Rather than blending paint to a smooth finish, they applied it in visible, broken brushstrokes — letting color and light replace line and outline. The name 'Impressionism' started as an insult, taken from Monet's Impression, Sunrise, but stuck. The movement permanently changed what painting could be, prioritizing sensation over finish.",
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
    summary: "Where Impressionism captured the external world's appearance, Expressionism distorted it to reveal inner emotional truth. Munch's anguished figures and Schiele's raw, contorted bodies made private suffering visible. The approach flourished especially in Germany and Austria, where artists confronted industrialization and existential anxiety with urgent visual language. Picasso's Blue Period shares Expressionism's emotional distortion even as it charts its own independent course.",
    traits: ["Distortion of form to convey emotion","Intense, non-naturalistic color","Psychological and existential themes","Anguished or vulnerable figures","Rejection of realism in favor of raw feeling"],
    artists: ["Edvard Munch","Egon Schiele","Ernst Ludwig Kirchner","Pablo Picasso (Blue Period)","Amedeo Modigliani","Francis Bacon"]
  },
  "Art Nouveau": {
    era: "c. 1890–1910",
    summary: "Art Nouveau unified painting, architecture, and design through sinuous organic curves and flat decorative surfaces. In Vienna, Gustav Klimt absorbed Byzantine gold mosaics, Japanese woodblock prints, and Egyptian ornament to create works of overwhelming richness. Gold leaf, symbolic imagery, and geometric patterning coexist with painterly naturalism in his canvases. The movement was soon overtaken by the harder geometries of modernism, but its brief flowering produced some of painting's most opulent icons.",
    traits: ["Sinuous, organic lines and curves","Gold leaf and decorative surface pattern","Flat areas of color inspired by Japanese prints","Symbolic allegory expressed through ornament","Fusion of fine art and decorative craft"],
    artists: ["Gustav Klimt","Egon Schiele","Aubrey Beardsley","Alphonse Mucha"]
  },
  "Fauvism": {
    era: "c. 1905–1910",
    summary: "For only a few explosive years, a group of Paris painters liberated color from its obligation to describe reality. The critic who called them Fauves ('wild beasts') meant it as an insult. Matisse was their leader: red rooms, green-faced figures, dancers outlined in electric blue. Color became autonomous — used not to describe what things look like, but what they feel like. Fauvism was brief but its influence on Expressionism and every subsequent color-forward movement was permanent.",
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
    summary: "Founded in Paris by André Breton, Surrealism tapped the unconscious mind — dreams, desires, fears — as the truest creative source. Dalí painted melting clocks and burning giraffes with Renaissance precision to make the impossible appear real. Magritte used ordinary objects in impossible combinations to expose the gap between image and reality. Miró developed a spontaneous visual poetry of biomorphic shapes. Kahlo brought fierce personal mythology to the movement.",
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
    summary: "Pop Art exploded in New York and London in the late 1950s, turning imagery of consumer culture — soup cans, comic strips, celebrities, advertisements — into fine art. Warhol's silkscreens blurred the line between commercial production and artistic creation; Lichtenstein blew up comic panels to gallery scale. Pop Art asked whether there was any meaningful difference between high culture and mass culture, and its irreverent answer — not really — permanently changed both.",
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
    summary: "Emerging from the crisis of the High Renaissance — the Sack of Rome, the Protestant Reformation — Mannerism deliberately violated the balance and harmony of its predecessors. Figures became elongated, poses artificially complex, colors acidic and artificial. Where Renaissance painters sought nature, Mannerist artists sought artifice, technical virtuosity, and intellectual sophistication. Arcimboldo's composite heads of fruit and vegetables are among its most extreme and playful examples.",
    traits: ["Elongated, artificial figures","Serpentine 'figura serpentinata' poses","Non-naturalistic, acidic colors","Spatial ambiguity and complexity","Technical virtuosity as a value in itself"],
    artists: ["Giuseppe Arcimboldo","Pontormo","Rosso Fiorentino","Bronzino","Parmigianino"]
  }
};

/* ── Artist bios ─────────────────────────────────────────────────────────── */
const ARTISTS = {
  "Leonardo da Vinci": {
    born: "1452", died: "1519", nationality: "Italian",
    bio: "The archetypal Renaissance polymath, Leonardo was simultaneously a painter, sculptor, architect, engineer, and scientist. His obsessive study of nature and the human body gave his paintings an unmatched sfumato — a smoky, almost atmospheric softening of contours. Only about 15 paintings survive, yet they include two of the most famous works ever made."
  },
  "Michelangelo": {
    born: "1475", died: "1564", nationality: "Italian",
    bio: "Michelangelo dominated the High Renaissance with a mastery of the human form that no contemporary could match. He considered himself a sculptor first, yet his ceiling for the Sistine Chapel redefined what painting could achieve. His figures carry an almost physical tension — a quality he called terribilità — that remained influential for centuries."
  },
  "Raphael": {
    born: "1483", died: "1520", nationality: "Italian",
    bio: "Raphael synthesized the greatest achievements of his contemporaries — Leonardo's sfumato, Michelangelo's sculptural power — into a style of serene, harmonious grace. Enormously productive in a short life, he ran a large workshop in Rome and set the standard for idealized beauty that academic painting upheld for 400 years."
  },
  "Sandro Botticelli": {
    born: "1445", died: "1510", nationality: "Italian",
    bio: "A favorite of the Medici court in Florence, Botticelli created the most celebrated mythological paintings of the Early Renaissance with an elegance and linear rhythm untouched by later High Renaissance weight. After a religious crisis inspired by Savonarola, he abandoned mythological subjects entirely and his late works reflect a haunted, urgent spirituality."
  },
  "Titian": {
    born: "c. 1490", died: "1576", nationality: "Italian (Venetian)",
    bio: "The dominant figure of Venetian painting for over six decades, Titian elevated oil paint into an instrument of unparalleled richness and sensuality. His late works, applied with fingers as much as brushes, anticipate Impressionism by three centuries. As the most sought-after portraitist in Europe, he painted emperors, popes, and kings."
  },
  "Caravaggio": {
    born: "1571", died: "1610", nationality: "Italian",
    bio: "Caravaggio revolutionized European painting by bringing a brutal, street-level realism to sacred subjects — his saints have dirty feet and his angels look like Roman boys. His use of extreme tenebrism, with figures emerging from near-total darkness into a single shaft of light, spawned an international school of followers called Caravaggisti. A volatile personality, he fled Rome in 1606 after committing murder."
  },
  "Artemisia Gentileschi": {
    born: "1593", died: "c. 1656", nationality: "Italian",
    bio: "Artemisia Gentileschi was the most celebrated woman painter of the Italian Baroque, a master of Caravaggio's dramatic tenebrism who brought an unmatched visceral force to images of strong women — Judith, Susanna, Cleopatra. After surviving a rape by her tutor and the trauma of a public trial, she channeled that experience into paintings of ferocious conviction. She was the first woman admitted to the Accademia delle Arti del Disegno in Florence."
  },
  "Rembrandt van Rijn": {
    born: "1606", died: "1669", nationality: "Dutch",
    bio: "Rembrandt is unsurpassed in his ability to render the inner life through paint — a trembling light on an aged face, the weight of shadow carrying as much meaning as the lit surface. He produced nearly 100 self-portraits, forming one of art history's most honest autobiographies. His late works, technically looser but psychologically deeper, were not fully appreciated until the 19th century."
  },
  "Johannes Vermeer": {
    born: "1632", died: "1675", nationality: "Dutch",
    bio: "Vermeer painted domestic interiors of extraordinary luminosity, capturing the quality of north-facing window light in a way never equaled. He produced very few works — around 34 survive — yet each is so carefully observed it rewards indefinite scrutiny. Almost nothing is known of his personal life, and he died leaving his family in debt."
  },
  "Jan van Eyck": {
    born: "c. 1390", died: "1441", nationality: "Flemish",
    bio: "Van Eyck pioneered the use of oil paint to achieve a jewel-like precision and depth impossible in earlier tempera technique. His paintings record the texture of fabrics, the reflections in mirrors, and the grain of wood with a microscopic fidelity that still astonishes. The Ghent Altarpiece, completed in 1432, is considered the founding monument of Northern European painting."
  },
  "Peter Paul Rubens": {
    born: "1577", died: "1640", nationality: "Flemish",
    bio: "Rubens ran the most productive workshop in northern Europe, creating monumental history paintings of irresistible energy and warmth. His figures — full-bodied, radiant-skinned — embody a physical vitality that defines the Baroque ideal of abundance. Equally gifted as a diplomat, he served as a court agent for the Spanish crown while painting some of the largest canvases in Western art."
  },
  "Diego Velázquez": {
    born: "1599", died: "1660", nationality: "Spanish",
    bio: "Court painter to Philip IV of Spain, Velázquez developed a technique of loose, impressionistic brushwork that captures the visual impression of a scene rather than its precise detail. Las Meninas is among the most analyzed paintings ever made, a meditation on the nature of painting itself. Manet, Sargent, and Bacon all named him as a decisive influence."
  },
  "Francisco Goya": {
    born: "1746", died: "1828", nationality: "Spanish",
    bio: "Goya began as a successful court painter in Madrid, but illness left him deaf in 1793 and transformed his art into something darker and more personal. His late 'Black Paintings' — nightmarish works he painted directly onto the walls of his house — prefigure Expressionism by a century. He is both the last Old Master and the first truly modern painter."
  },
  "Pablo Picasso": {
    born: "1881", died: "1973", nationality: "Spanish",
    bio: "No artist of the 20th century matched Picasso's range, productivity, or influence. With Braque he invented Cubism, shattering the single-viewpoint perspective that had governed Western art since the Renaissance. He continually reinvented his style, moving across Cubism, Neoclassicism, Surrealism, and beyond, leaving over 20,000 works."
  },
  "Vincent van Gogh": {
    born: "1853", died: "1890", nationality: "Dutch",
    bio: "In just ten years of serious painting, Van Gogh created a body of work of visceral emotional intensity — swirling skies, pulsating cypress trees, burning yellows. He sold only one painting in his lifetime and struggled with mental illness, but his letters to his brother Theo reveal one of art history's most searching minds. He died at 37, unrecognized, and became the world's most famous artist."
  },
  "Paul Gauguin": {
    born: "1848", died: "1903", nationality: "French",
    bio: "Gauguin abandoned his career as a stockbroker at 35 to become a painter, seeking a primitive authenticity he believed European civilization had destroyed. His years in Tahiti and the Marquesas produced flat, brilliantly colored paintings of Polynesian life that pioneered Primitivism and influenced the Fauves and Expressionists. His life and work remain deeply entangled in colonial history."
  },
  "Paul Cézanne": {
    born: "1839", died: "1906", nationality: "French",
    bio: "Working in near isolation in Provence, Cézanne dedicated his life to a single problem: how to render solid, three-dimensional reality with patches of color on a flat surface. His solution — interlocking planes of color that simultaneously suggest depth and assert the picture's flatness — was the direct ancestor of Cubism. Picasso called him 'the father of us all.'"
  },
  "Claude Monet": {
    born: "1840", died: "1926", nationality: "French",
    bio: "Monet gave his name to Impressionism — a critic applied the word mockingly to his 1872 painting Impression, Sunrise — and spent his career pushing its principles further than anyone. His serial paintings of haystacks, Rouen Cathedral, and water lilies study how light changes a single subject across time and season. The late Nymphéas, painted as his eyesight failed, became a 20th-century touchstone for abstraction."
  },
  "Pierre-Auguste Renoir": {
    born: "1841", died: "1919", nationality: "French",
    bio: "The most sensually joyful of the Impressionists, Renoir painted the pleasures of modern Parisian life — sunlit dances, boating parties, café terraces — with a warm, luminous touch. In his later years, crippled by rheumatoid arthritis, he had brushes strapped to his hands and continued painting until his death. He is among the most beloved and most reproduced artists in history."
  },
  "Edgar Degas": {
    born: "1834", died: "1917", nationality: "French",
    bio: "Degas rejected the Impressionist obsession with painting outdoors, preferring instead the artificial light of racetracks, opera houses, and café-concerts. His dancers are not idealized — they stretch, scratch, and adjust their costumes — yet his compositions, influenced by photography and Japanese prints, are among the most formally sophisticated of his era. He was also a pioneering sculptor in wax."
  },
  "Édouard Manet": {
    born: "1832", died: "1883", nationality: "French",
    bio: "Manet is the contested pivot between the Old Masters and Modernism. He painted with a directness that scandalized the Salon — flat patches of color, figures staring confrontationally at the viewer, subjects that defied academic decorum. He never joined the Impressionists but inspired and supported them, and his influence on Degas, Monet, and Berthe Morisot was profound."
  },
  "Georges Seurat": {
    born: "1859", died: "1891", nationality: "French",
    bio: "Seurat brought scientific method to painting, developing Pointillism — applying small dots of pure color that the eye optically mixes from a distance. His grande compositions, meticulously constructed over years, have a monumental stillness unlike anything in Impressionism. He died at 31, leaving only seven large-scale paintings but transforming color theory for the century that followed."
  },
  "Henri Matisse": {
    born: "1869", died: "1954", nationality: "French",
    bio: "Matisse used color not to describe light but to create emotional states, making him the central figure of Fauvism and one of the defining masters of 20th-century art. His interiors, odalisques, and late paper cut-outs radiate a deliberate sense of pleasure and well-being — what he called 'an armchair for the mind.' He and Picasso were the twin poles of modern painting for half a century."
  },
  "Salvador Dalí": {
    born: "1904", died: "1989", nationality: "Spanish",
    bio: "The most flamboyant personality in modern art, Dalí combined the precise illusionistic technique of the Old Masters with imagery drawn from dreams and Freudian psychology. His melting watches, burning giraffes, and figures dissolving into particles became the most widely reproduced Surrealist images ever made. He was as much a showman as a painter, cultivating celebrity with the same intensity he brought to his craft."
  },
  "René Magritte": {
    born: "1898", died: "1967", nationality: "Belgian",
    bio: "Magritte's Surrealism worked through logical paradox rather than dreamlike distortion — ordinary objects placed in impossible relationships, captions that contradict images, the familiar made suddenly strange. He painted in a deliberately flat, commercial style that intensified the uncanniness of his subjects. His images have entered the broader culture as shorthand for the disjunction between words and things."
  },
  "Joan Miró": {
    born: "1893", died: "1983", nationality: "Spanish",
    bio: "Miró developed a visual language of biomorphic symbols — suns, moons, stars, and ambiguous creatures — that sat between Surrealism's dream logic and pure abstraction. He described his paintings as 'a form of poetry in paint,' and their childlike exuberance disguises a highly sophisticated formal intelligence. His long career bridged Surrealism and the Abstract Expressionists who revered him."
  },
  "Jackson Pollock": {
    born: "1912", died: "1956", nationality: "American",
    bio: "Pollock's drip paintings, made by pouring and flinging paint onto canvas laid on the floor, redefined the act of painting as a physical, performative gesture. His all-over compositions have no focal point, no hierarchy of incident — they demand to be experienced as a whole field. He was the central figure of Abstract Expressionism and the first American artist to achieve worldwide fame."
  },
  "Andy Warhol": {
    born: "1928", died: "1987", nationality: "American",
    bio: "Warhol made the consumer image — the soup can, the celebrity headshot, the newspaper photograph — the raw material of high art, erasing the distinction between commercial design and painting. His Factory was a production machine and a social experiment, a space where art, fame, film, and music collapsed into each other. He remains the most influential American artist of the second half of the 20th century."
  },
  "Roy Lichtenstein": {
    born: "1923", died: "1997", nationality: "American",
    bio: "Lichtenstein transformed the visual language of comic books and advertisements into monumental paintings, using Ben-Day dots, bold outlines, and primary colors to comment on mass culture and the nature of reproduction. His appropriation of low art into high art contexts was central to Pop Art's critique of modernist painting's claims to originality and self-expression."
  },
  "Edward Hopper": {
    born: "1882", died: "1967", nationality: "American",
    bio: "Hopper painted the emotional geography of American solitude — diners, gas stations, hotel rooms, and theaters suffused with a quality of light that makes the familiar feel estranged. His compositions, influenced by cinema and theater, are studies in psychological tension: figures who seem to be waiting for something that will never arrive. No image better captures the loneliness of modern life than Nighthawks."
  },
  "Grant Wood": {
    born: "1891", died: "1942", nationality: "American",
    bio: "Wood's American Gothic became an icon of Americana within a year of its exhibition, its farmer and woman (his sister and dentist, not a married couple) endlessly reinterpreted as everything from dignity to narrowness. Trained partly in Europe, he developed a regionalist style combining Flemish Renaissance precision with the rolling landscapes of Iowa. He is inseparable from a certain mythologized vision of rural American life."
  },
  "Winslow Homer": {
    born: "1836", died: "1910", nationality: "American",
    bio: "Homer began as a magazine illustrator during the Civil War, and his eye for narrative force never left him. His mature work — coastal scenes of fishermen, hunters, and children in nature — achieves a monumental simplicity that makes him one of the greatest American painters of the 19th century. His late Adirondacks and Bahamas watercolors are among the finest ever made."
  },
  "Mary Cassatt": {
    born: "1844", died: "1926", nationality: "American",
    bio: "Cassatt was the only American to exhibit with the Impressionists and the only woman among their core group. She specialized in domestic scenes of women and children — mothers bathing babies, women reading or visiting — rendered with a warmth and informality that distinguished her from her male contemporaries. She was also a crucial advocate who persuaded American collectors to acquire Impressionist works."
  },
  "Thomas Eakins": {
    born: "1844", died: "1916", nationality: "American",
    bio: "Eakins pursued a radical realism grounded in anatomy, perspective, and scientific observation, producing paintings of athletes, surgeons, and rowers that prize truth above elegance. His masterpiece, The Gross Clinic, was considered too graphic for the 1876 Centennial Exhibition. Largely unappreciated in his lifetime, he is now considered the greatest American realist of the 19th century."
  },
  "John Singer Sargent": {
    born: "1856", died: "1925", nationality: "American",
    bio: "Sargent was the supreme society portraitist of the Gilded Age, capturing the texture of silk, the glitter of candlelight, and the psychology of his sitters with bravura brushwork. His scandalous Madame X effectively ended his Paris career but secured his reputation. In later years he largely abandoned portraits for luminous watercolors and the monumental Boston murals."
  },
  "James McNeill Whistler": {
    born: "1834", died: "1903", nationality: "American",
    bio: "Whistler argued that painting should be purely about aesthetic arrangement — color, tone, composition — independent of narrative or moral content, a philosophy he encoded in musical titles like Arrangement in Grey and Black. His Thames nocturnes and interior harmonies align him with Aestheticism and anticipate Modernism's emphasis on formal values. His libel suit against Ruskin became a Victorian sensation."
  },
  "John Singleton Copley": {
    born: "1738", died: "1815", nationality: "American",
    bio: "Copley was the first great American-born painter, producing portraits of Colonial Boston merchants and officials with a directness and psychological acuity that surpassed anything being made in the colonies. After moving to London in 1774, he created dramatic history paintings on a scale new to British art. His Watson and the Shark was one of the first paintings to feature a Black figure as its protagonist."
  },
  "John Trumbull": {
    born: "1756", died: "1843", nationality: "American",
    bio: "Trumbull served as an aide-de-camp to George Washington and dedicated his career to painting the founding moments of the American republic. His Declaration of Independence, derived from direct portraits of the signers he personally knew, became the defining visual record of that event. Four of his paintings hang in the Capitol Rotunda."
  },
  "Emanuel Leutze": {
    born: "1816", died: "1868", nationality: "German-American",
    bio: "Leutze was a German-born artist working in Düsseldorf when he painted Washington Crossing the Delaware, conceived as an inspiration for the European revolutions of 1848 as much as a historical record. The painting's heroic scale and dramatic lighting made it an instant American icon, though its historical inaccuracies are numerous. It remains the most famous image of the Revolutionary War."
  },
  "Andrew Wyeth": {
    born: "1917", died: "2009", nationality: "American",
    bio: "Wyeth worked in a quietly realist tradition when abstraction dominated American art, painting the landscapes and people of Chadds Ford, Pennsylvania and coastal Maine with an almost obsessive fidelity. Christina's World, discovered by the public as a surprise, became one of the most reproduced American paintings of the 20th century. His hidden series of 247 paintings of his neighbor Helga, revealed in 1986, shocked the art world."
  },
  "Jacob Lawrence": {
    born: "1917", died: "2000", nationality: "American",
    bio: "Lawrence told the history of African American life through bold, flat-color compositions influenced by Cubism and African art. His 60-panel Migration Series, documenting the Great Migration of Black Americans northward, was the first work by a Black artist acquired by the Museum of Modern Art. His style — direct, geometric, and unmistakable — shaped American social realism."
  },
  "Edvard Munch": {
    born: "1863", died: "1944", nationality: "Norwegian",
    bio: "Munch transformed personal trauma — the deaths of his mother and sister, his terror of hereditary madness, his anguished relationships — into paintings of raw psychological intensity. The Scream exists in four versions and has become the most universally recognized expression of anxiety in Western art. His influence on German Expressionism was direct and acknowledged."
  },
  "Gustav Klimt": {
    born: "1862", died: "1918", nationality: "Austrian",
    bio: "Klimt was the dominant figure of Viennese Art Nouveau and the founding president of the Vienna Secession, which sought to break the academic monopoly on Austrian culture. His paintings fuse Byzantine gilding, Japanese flat patterning, and Symbolist eroticism into an utterly distinctive style. The Kiss has become one of the most reproduced artworks in the world."
  },
  "Egon Schiele": {
    born: "1890", died: "1918", nationality: "Austrian",
    bio: "Schiele's brief career, cut short by the 1918 influenza pandemic at 28, produced some of the most charged figurative drawings and paintings of the 20th century. His emaciated, contorted nudes confronted sexuality, mortality, and isolation with an unflinching directness that shocked contemporaries and still carries its force today. He was a protégé of Klimt's but quickly developed a rawness entirely his own."
  },
  "Frida Kahlo": {
    born: "1907", died: "1954", nationality: "Mexican",
    bio: "Kahlo painted her physical pain — from a devastating bus accident at 18 and 35 subsequent surgeries — and her emotional life with a directness that places her among the most powerful self-portraitists in history. Though often associated with Surrealism, she rejected the label: 'I never painted dreams. I painted my own reality.' Her work, largely overlooked in her lifetime, became an icon of feminist and Latin American identity."
  },
  "Diego Rivera": {
    born: "1886", died: "1957", nationality: "Mexican",
    bio: "Rivera revived the Renaissance tradition of fresco painting on a revolutionary scale, covering the walls of public buildings with epic narratives of Mexican history, the labor movement, and pre-Columbian civilization. His Rockefeller Center mural, destroyed for including Lenin's portrait, became a cause célèbre. His turbulent marriage to Frida Kahlo is among the most chronicled partnerships in art history."
  },
  "Rufino Tamayo": {
    born: "1899", died: "1991", nationality: "Mexican",
    bio: "Tamayo sought a synthesis between pre-Columbian imagery and European modernism that set him apart from both the political muralists Rivera and Orozco and from pure abstraction. His richly textured canvases in deep reds, ochres, and blacks evoke ancient Mexico while engaging with Cubism and Surrealism. He remains Mexico's most internationally recognized painter after Rivera and Kahlo."
  },
  "María Izquierdo": {
    born: "1902", died: "1955", nationality: "Mexican",
    bio: "Izquierdo was the first Mexican woman to exhibit in the United States, bringing her country's folk traditions — altars, circus performers, domestic interiors — into dialogue with post-Cubist modernism. Her work has a vivid, slightly naive quality that reflects both her indigenous roots and her awareness of European avant-garde painting. She was long overshadowed by Rivera and Kahlo but is increasingly recognized as a major figure."
  },
  "J.M.W. Turner": {
    born: "1775", died: "1851", nationality: "British",
    bio: "Turner pushed landscape painting so far toward pure light and atmosphere that his late works are sometimes called proto-Impressionist or even proto-abstract. He was an extraordinary draftsman who made thousands of watercolor studies of weather, sea, and sky. Ruskin became his greatest champion, writing five volumes defending him; Monet crossed the Channel specifically to study his paintings."
  },
  "John Constable": {
    born: "1776", died: "1837", nationality: "British",
    bio: "Constable dedicated his career to the intimate landscapes of his native Suffolk, painting clouds, fields, and water with a freshness and immediacy that broke from the picturesque tradition. His six-foot canvases shown at the 1824 Paris Salon electrified Delacroix and directly influenced the Barbizon painters who preceded Impressionism. He said he had never seen anything ugly in nature."
  },
  "Thomas Gainsborough": {
    born: "1727", died: "1788", nationality: "British",
    bio: "Gainsborough divided his career between portraiture, which paid his bills, and landscape, which he loved — a tension that charges his portraits, which he placed within landscape-like settings of feathery foliage. His handling was loose and virtuosic, more concerned with the shimmer of silk and the play of light than anatomical precision. The Blue Boy is his most celebrated painting, though he thought little of it."
  },
  "Thomas Lawrence": {
    born: "1769", died: "1830", nationality: "British",
    bio: "Lawrence succeeded Reynolds and Gainsborough as the leading British portraitist, bringing a Romantic dash and psychological immediacy to the genre. His portraits of the allied leaders after Waterloo, commissioned by the Prince Regent for the Waterloo Chamber at Windsor, are among the finest portrait suites ever painted. He was elected President of the Royal Academy at 40."
  },
  "Hans Holbein the Younger": {
    born: "1497", died: "1543", nationality: "German",
    bio: "Holbein was the greatest portrait painter of the Northern Renaissance, combining a precise, almost photographic eye for surface detail with a penetrating grasp of character. As court painter to Henry VIII, he created the definitive image of Tudor royalty — imposing, magnificent, slightly terrifying. His Ambassadors, with its anamorphic skull, is among the most intellectually complex paintings of the Renaissance."
  },
  "Albrecht Dürer": {
    born: "1471", died: "1528", nationality: "German",
    bio: "Dürer united the observation-based naturalism of the Italian Renaissance with the introspective depth of the Northern tradition, making him the greatest German artist of his era. His self-portraits — one of which shows him in a Christ-like pose — reflect an unprecedented individualism. He was a theoretical writer on proportion and perspective as well as the supreme engraver and woodcut artist of his age."
  },
  "Pieter Bruegel the Elder": {
    born: "c. 1525", died: "1569", nationality: "Flemish",
    bio: "Bruegel invented the landscape of common life — peasants feasting, skating, harvesting, and dying — elevating it to a subject worthy of the largest format. His Seasons cycle is among the most ambitious and successful series ever painted, capturing the rhythms of the agricultural year with an epic scope. Despite being celebrated in his own time, his true greatness was not fully grasped until the 20th century."
  },
  "Hieronymus Bosch": {
    born: "c. 1450", died: "1516", nationality: "Flemish",
    bio: "Bosch populated his panels with a teeming, nightmarish imagination — hybrid creatures, tormented sinners, surreal architectures — that has never been satisfactorily explained. Whether his imagery derives from alchemical symbolism, folk proverbs, or personal vision, it remains entirely unprecedented and entirely his own. The Surrealists claimed him as a predecessor; psychologists have interpreted him endlessly."
  },
  "Rogier van der Weyden": {
    born: "c. 1400", died: "1464", nationality: "Flemish",
    bio: "Van der Weyden was the most influential Flemish painter after Jan van Eyck, and where Van Eyck brought jewel-like observation, Van der Weyden brought an agonized emotional intensity to religious subjects. His Descent from the Cross conveys a grief so concentrated it approaches abstraction. His influence spread through Europe as collectors and rulers competed for his altarpieces."
  },
  "Fra Angelico": {
    born: "c. 1395", died: "1455", nationality: "Italian",
    bio: "Fra Angelico, a Dominican friar, brought a luminous spiritual sweetness to the Early Renaissance, decorating the monks' cells at San Marco in Florence with frescoes intended for private meditation. He combined the new Renaissance command of perspective and anatomy with a tenderness of feeling that resists entirely secular interpretation. He was beatified by Pope John Paul II in 1982."
  },
  "Fra Angelico and Fra Filippo Lippi": {
    born: "c. 1395 / c. 1406", died: "1455 / 1469", nationality: "Italian",
    bio: "Fra Angelico and Fra Filippo Lippi were the two dominant figures of Early Florentine Renaissance painting. Fra Angelico brought luminous spiritual devotion to his sacred scenes; Lippi added a more worldly sensuality and psychological naturalism. Their collaborative Adoration of the Magi brings both qualities together in a richly populated narrative."
  },
  "Piero della Francesca": {
    born: "c. 1415", died: "1492", nationality: "Italian",
    bio: "Piero della Francesca painted with a stillness and geometric serenity unique in the Early Renaissance, his figures inhabiting a world of cool, crystalline light that seems outside time. He was also a mathematician who wrote the first theoretical treatise on perspective in Italian. Neglected for centuries, he was rediscovered in the 20th century as a key ancestor of Cézanne and geometric abstraction."
  },
  "Paolo Veronese": {
    born: "1528", died: "1588", nationality: "Italian (Venetian)",
    bio: "Veronese filled vast canvases with spectacular feasts, processions, and allegories in the rich chromatic tradition of Venice, deploying silks, architectural vistas, and dramatic lighting on an operatic scale. His Wedding at Cana, hung opposite the Mona Lisa in the Louvre, is the largest painting in the museum. The Inquisition summoned him to justify the secular frivolity of his Last Supper, which he simply retitled."
  },
  "Giorgione": {
    born: "c. 1477", died: "1510", nationality: "Italian (Venetian)",
    bio: "Giorgione died at about 33, leaving barely a dozen authenticated paintings, yet his invention of the landscape as a setting for mysterious, contemplative figures transformed Venetian painting. His subjects resist narrative explanation — they seem suspended in a mood rather than a story. Titian, his junior colleague, completed at least two of his unfinished works and inherited his lyrical vision."
  },
  "Giorgione (completed by Titian)": {
    born: "c. 1477 / c. 1490", died: "1510 / 1576", nationality: "Italian (Venetian)",
    bio: "The Sleeping Venus was begun by Giorgione and completed by Titian after Giorgione's early death, making it a collaborative monument of Venetian Renaissance painting. Giorgione established the reclining Venus as a Venetian type; Titian's additions — possibly the landscape and drapery — absorbed the composition so completely that attribution remained contested for centuries."
  },
  "Giovanni Bellini and Titian": {
    born: "c. 1430 / c. 1490", died: "1516 / 1576", nationality: "Italian (Venetian)",
    bio: "Giovanni Bellini was the master who shaped the Venetian school, bringing a warm luminosity to altarpieces and devotional images that influenced every subsequent Venetian painter. Titian trained in his workshop and completed his late works after his death. Their shared contribution to Venetian painting — from Bellini's Madonna compositions to Titian's mythologies — spans more than a century."
  },
  "Canaletto": {
    born: "1697", died: "1768", nationality: "Italian (Venetian)",
    bio: "Canaletto made Venice's Grand Canal and piazzas into the defining images of the city, his views so precise and luminous that they served as both tourist souvenirs and architectural documentation. He worked extensively for British patrons who brought his vedute back from the Grand Tour, making him better known in England than in Italy. He may have used a camera obscura to achieve his extraordinary precision."
  },
  "Jacques-Louis David": {
    born: "1748", died: "1825", nationality: "French",
    bio: "David was the supreme painter of the French Revolution and Napoleonic era, his Neoclassical style — austere, stoic, anchored in ancient Roman virtue — perfectly expressing revolutionary ideology. He literally witnessed the Terror, organized state festivals, and painted Napoleon's coronation. Exiled to Brussels after Napoleon's fall, he remained the most influential French painter of his generation."
  },
  "Eugène Delacroix": {
    born: "1798", died: "1863", nationality: "French",
    bio: "Delacroix was the great Romantic painter, opposing the cool rational line of David and Ingres with violent color, dynamic composition, and subjects from literature, history, and the imagination. His Liberty Leading the People became the icon of the 1830 Revolution within a year of its painting. His journals, kept for decades, are among the finest documents in art history."
  },
  "Théodore Géricault": {
    born: "1791", died: "1824", nationality: "French",
    bio: "Géricault died at 32 after a brief career of electrifying intensity, leaving a single monumental masterpiece that redefined what French painting could be. The Raft of the Medusa — based on a contemporary shipwreck scandal — brought the raw scale of history painting to a subject of political accusation and physical horror. His direct influence on Delacroix was profound."
  },
  "Jean-Honoré Fragonard": {
    born: "1732", died: "1806", nationality: "French",
    bio: "Fragonard painted the pleasures of the French aristocracy before the Revolution — lovers in gardens, young women on swings, domestic dalliance — with a feathery, iridescent lightness that made him the most successful Rococo painter of his era. He survived the Revolution but his work had no place in the new world: he died in obscurity, outliving his market by three decades."
  },
  "Nicolas Poussin": {
    born: "1594", died: "1665", nationality: "French",
    bio: "Poussin was the founder of the French classical tradition, spending most of his career in Rome and deriving his subjects from ancient history, mythology, and the Bible. His landscapes and figure compositions have a lucid, almost architectural order that made him the touchstone of French academic theory for 200 years. Cézanne admired him deeply, aspiring 'to redo Poussin from nature.'"
  },
  "Jean-François Millet": {
    born: "1814", died: "1875", nationality: "French",
    bio: "Millet devoted his career to the rural poor, painting peasants at labor — sowing, gleaning, praying in fields — with a dignity and gravity that made him politically controversial and enormously influential. He was a founding figure of the Barbizon school. The Angelus and The Gleaners were the most reproduced paintings in France for decades after his death and profoundly moved Van Gogh."
  },
  "Camille Corot": {
    born: "1796", died: "1875", nationality: "French",
    bio: "Corot worked between the Classical landscape tradition and a new sensitivity to the transient qualities of light and atmosphere, making him a bridge between Poussin and the Impressionists. His forest interiors and misty Italian studies influenced Monet and Pissarro directly. He was famously generous to young painters — he bought Daumier a house when the caricaturist went blind."
  },
  "Gustave Caillebotte": {
    born: "1848", died: "1894", nationality: "French",
    bio: "Caillebotte was both a painter of Paris Haussmannization and the financial lifeline of the Impressionist group, purchasing dozens of works that would become the core of the Musée d'Orsay collection. His own paintings — radical cropped perspectives of rain-slicked boulevards and workers scraping floors — are among the most compositionally daring of the Impressionist circle. He was largely overshadowed during his lifetime by his friends."
  },
  "Henri de Toulouse-Lautrec": {
    born: "1864", died: "1901", nationality: "French",
    bio: "Lautrec spent his brief career in the cabarets and brothels of Montmartre, creating posters, lithographs, and paintings of the performers and prostitutes he encountered with a sympathy born of shared marginality — his own dwarfism had excluded him from aristocratic society despite his noble birth. His posters for the Moulin Rouge essentially invented modern graphic design. He died of alcoholism at 36."
  },
  "Henri Rousseau": {
    born: "1844", died: "1910", nationality: "French",
    bio: "Rousseau was a customs official with no formal training who began painting in his forties and developed a style of meticulous naïveté — detailed jungle scenes populated with exotic animals and sleeping figures in eerily still moonlight — derived entirely from imagination and zoo visits, not travel. Picasso discovered him and threw a famous banquet in his honor. He is the canonical example of the untrained genius."
  },
  "Piet Mondrian": {
    born: "1872", died: "1944", nationality: "Dutch",
    bio: "Mondrian pursued a decades-long reduction of painting to its absolute essentials — horizontal and vertical black lines on a white field, with rectangles of primary color — which he called Neoplasticism. He believed this grid expressed universal harmony beneath the surface of appearances. His influence on architecture, graphic design, and typography in the 20th century was enormous and is still felt."
  },
  "Amedeo Modigliani": {
    born: "1884", died: "1920", nationality: "Italian",
    bio: "Modigliani worked in Paris, outside the major movements around him, developing a singular style of elongated necks, almond-shaped eyes, and tilted oval faces drawn from African sculpture and Italian Mannerism. His portraits and nudes have an intimacy and melancholy that reflects a life of genuine poverty and ill-health. He died of tuberculosis at 35, unknown to the wider world."
  },
  "Georges de La Tour": {
    born: "1593", died: "1652", nationality: "French",
    bio: "La Tour painted candlelit nocturnal scenes of extraordinary stillness and spiritual concentration, his figures bathed in warm artificial light that simplifies their forms to near-geometric purity. Almost entirely forgotten after his death, he was rediscovered in 1915 and is now recognized as one of the great Caravaggisti and one of the most distinctive voices of 17th-century French painting."
  },
  "Frans Hals": {
    born: "c. 1582", died: "1666", nationality: "Dutch",
    bio: "Hals was the portraitist of Haarlem's merchant class, capturing laughter, conviviality, and fleeting expression with a loose, flickering brushwork that anticipates Impressionism by two centuries. He worked in poverty in old age, dependent on municipal charity, yet his late group portraits — painted in his eighties — are among the most technically adventurous works of the Dutch Golden Age. Manet and Sargent were devoted students of his technique."
  },
  "Carel Fabritius": {
    born: "1622", died: "1654", nationality: "Dutch",
    bio: "Fabritius was Rembrandt's most gifted pupil and almost certainly the teacher of Vermeer, making him the missing link between the two greatest Dutch painters. He died at 32 when the Delft powder magazine exploded, destroying most of his work. The Goldfinch is his most celebrated surviving painting: tiny, precise, and inexplicably affecting."
  },
  "Jan Steen": {
    born: "1626", died: "1679", nationality: "Dutch",
    bio: "Steen painted scenes of chaotic domestic disorder — drunken households, raucous taverns, unruly families — with a comic intelligence and moral undertow that made his name a Dutch idiom for disorder. Behind the laughter are carefully constructed compositions full of emblematic detail. He worked as an innkeeper for much of his career, which may have provided his subject matter directly."
  },
  "Jan Davidsz. de Heem": {
    born: "1606", died: "1684", nationality: "Dutch",
    bio: "De Heem was the most celebrated still-life painter of the Dutch and Flemish Golden Age, synthesizing the Dutch preference for precisely lit everyday objects with the Flemish taste for abundant, luxurious display. His garlands, banquet pieces, and vanitas paintings were sought by collectors across Europe and he maintained workshops in both Utrecht and Antwerp. His influence on the genre extended well into the 18th century."
  },
  "Paulus Potter": {
    born: "1625", died: "1654", nationality: "Dutch",
    bio: "Potter specialized in large-scale animal painting at a time when such subjects were considered minor, producing monumental canvases of cattle and horses in landscape that rank among the most technically accomplished animal paintings ever made. His Young Bull, painted when he was 22, was considered a masterpiece in his own lifetime. Like Fabritius, he died very young and left a small but influential body of work."
  },
  "Giuseppe Arcimboldo": {
    born: "1527", died: "1593", nationality: "Italian",
    bio: "Arcimboldo served the Habsburg emperors in Vienna and Prague, creating his famous composite portraits — human faces assembled entirely from seasonal fruits, vegetables, flowers, or fish — that delighted the imperial court as learned visual puns. Rediscovered by the Surrealists in the 20th century, he is now seen as a forerunner of their collage aesthetic. His works hover between joke and vision."
  },
  "Juan Gris": {
    born: "1887", died: "1927", nationality: "Spanish",
    bio: "Gris developed Synthetic Cubism into the most lucid and elegant form of the style, building his still lives from flat planes of pure color overlaid with drawn forms in a way that feels both analytical and decorative. He arrived in Paris in 1906, became Picasso's neighbor, and was the third major figure of Cubism after Picasso and Braque. He died of kidney disease at 40."
  },
  "Marcel Duchamp": {
    born: "1887", died: "1968", nationality: "French-American",
    bio: "Duchamp effectively ended one tradition and started another with a single gesture: submitting a urinal titled Fountain to an exhibition in 1917. His readymades — ordinary objects declared art by the artist's choice — proposed that art is a concept rather than a craft, a provocation that underlies conceptual art, minimalism, and installation art to this day. He spent the last decades of his life apparently playing chess."
  },
  "Francis Bacon": {
    born: "1909", died: "1992", nationality: "Irish-British",
    bio: "Bacon distorted the human figure into screaming, blurred, meat-like presences that expressed what he called 'the brutality of fact' — existence stripped of consolation or meaning. Working from photographs, Velázquez, and Muybridge, he created an existentialist figuration uniquely his own. His triptychs of his companion George Dyer, painted after Dyer's suicide, are among the most devastating works in 20th-century art."
  },
  "Attributed to Leonardo da Vinci": {
    born: "1452", died: "1519", nationality: "Italian",
    bio: "The attribution of certain works to Leonardo remains contested among scholars, the question of his hand distinguished from workshop assistants by technical analysis, connoisseurship, and archival research. Leonardo's studio produced multiple versions of his most sought-after compositions, and the boundaries between master and workshop were often deliberately blurred. Works attributed to him carry the full weight of his revolutionary sfumato technique and formal intelligence."
  },
  "El Greco": {
    born: "c. 1541", died: "1614", nationality: "Greek (worked in Spain)",
    bio: "Born in Crete and trained in the Byzantine icon tradition, El Greco travelled to Venice and Rome before settling permanently in Toledo in 1577. He absorbed Mannerist and Venetian Renaissance influences — especially Titian and Tintoretto — while never abandoning the spiritual intensity of his Orthodox roots. His style of elongated figures, cold acid colors, and dramatic lighting was considered eccentric in his lifetime and was largely forgotten after his death. Rediscovered in the early 20th century, he is now recognized as a profound individualist and a direct precursor to Expressionism and Cubism."
  },
  "Francisco de Zurbarán": {
    born: "1598", died: "1664", nationality: "Spanish",
    bio: "Known as the 'Spanish Caravaggio,' Zurbarán mastered dramatic chiaroscuro to produce intensely devotional religious paintings and austere still lifes. Appointed painter to Philip IV around 1630, he dominated Seville's religious art market for decades with series of monks, saints, and the famous bound lamb, Agnus Dei. His meditative, almost hallucinatory realism — figures emerging from absolute darkness into a single shaft of light — gave Spanish Baroque painting some of its most quietly devastating images."
  },
  "Bartolomé Esteban Murillo": {
    born: "c. 1617", died: "1682", nationality: "Spanish",
    bio: "Murillo spent almost his entire career in Seville, becoming the city's most celebrated painter of the 17th century. He is renowned for warm, luminous depictions of the Virgin Mary, the Immaculate Conception, and tender genre scenes of street children that combine Flemish color harmonies with Italian chiaroscuro. His soft atmospheric style — the estilo vaporoso — made him enormously popular across Europe for two centuries. He co-founded the Seville Academy of Fine Arts in 1660 and died from injuries suffered after a fall from scaffolding while working on an altarpiece."
  },
  "José de Ribera": {
    born: "1591", died: "1652", nationality: "Spanish (worked in Naples)",
    bio: "Ribera left Spain as a young man and settled in Naples — then under Spanish rule — where he spent his entire career and earned the nickname Lo Spagnoletto (the Little Spaniard). An early Caravaggist of fierce conviction, he specialized in the suffering faces of martyred saints, stoic philosophers, and ancient mythological figures rendered with brutal realism. He later developed a richer, more luminous palette while retaining dramatic tenebrism. The Prado holds the largest collection of his work outside Naples, and he is ranked alongside Velázquez, Zurbarán, and Murillo as a founding figure of Spanish Baroque painting."
  },
  "School of Fontainebleau": {
    born: "c. 1530", died: "c. 1610", nationality: "French",
    bio: "The School of Fontainebleau refers to two successive groups of artists who worked at the French royal palace of Fontainebleau during the 16th century, creating a uniquely French strain of Mannerism by blending Italian influence with Flemish craft. Their characteristic works — elongated figures, complex allegories, and erotic mythological scenes — reflect the sophisticated tastes of the Valois court. Most School of Fontainebleau paintings are anonymous, attributed by style rather than document."
  },
  "Jean Clouet": {
    born: "c. 1485", died: "c. 1540", nationality: "French (Flemish-born)",
    bio: "Clouet was the principal portrait painter to Francis I of France for nearly two decades, setting the standard for French court portraiture in the first half of the 16th century. His meticulously finished oil portraits and portrait drawings combine Flemish precision with Italian idealization in a manner perfectly suited to the humanist pretensions of the French court. He was succeeded in his role by his son François Clouet. Little documentary evidence of his life survives, but his few securely attributed paintings are among the most important French portraits of the Renaissance."
  },
  "Andrea Mantegna": {
    born: "1431", died: "1506", nationality: "Italian",
    bio: "Mantegna was the dominant painter of northern Italy in the 15th century and one of the most intellectually rigorous artists of the entire Renaissance, obsessed with classical antiquity and its archaeological exactitude. His mastery of extreme foreshortening — demonstrated above all in the Dead Christ in Milan — influenced artists from Dürer to Caravaggio. He spent almost his entire career as court painter to the Gonzaga family in Mantua, where he decorated the Camera degli Sposi with the first fully illusionistic ceiling in Western painting. His engraving technique was widely disseminated and influenced printmakers across Europe."
  },
  "Jean-Auguste-Dominique Ingres": {
    born: "1780", died: "1867", nationality: "French",
    bio: "Ingres was the preeminent Neoclassical painter of 19th-century France and the great champion of academic tradition against the Romantic movement. Though he aspired to recognition as a history painter in the tradition of Poussin, his greatest legacy rests with his portraits and exotic nudes — the Grande Odalisque, the Turkish Bath — where his deliberate anatomical distortions anticipate modernism. His influence extended directly to Matisse and Picasso, who both owned prints of his work. He also directed the French Academy in Rome and shaped the training of a generation of painters."
  },
  "Jean-Antoine Watteau": {
    born: "1684", died: "1721", nationality: "French",
    bio: "Watteau transformed French painting in his brief 36-year life, shifting the prevailing Baroque aesthetic toward the lighter Rococo and inventing the fête galante genre to accommodate his vision of elegant figures in dreamlike outdoor settings. He drew on Rubens and Venetian color while developing a luminous, feathery brushstroke entirely his own. His admission piece to the Royal Academy, The Embarkation for Cythera, prompted the academicians to create a new artistic category. He died of tuberculosis at 37, leaving a body of work small in quantity but enormous in influence on the entire 18th century."
  },
  "Hyacinthe Rigaud": {
    born: "1659", died: "1743", nationality: "French",
    bio: "Rigaud was the dominant portrait painter of the French court during the reigns of Louis XIV and Louis XV, renowned for his ability to project royal authority through pose, costume, and grandeur of handling. His 1701 Portrait of Louis XIV is the definitive image of absolute monarchy in Western painting, imitated across Europe for a century. Born in Perpignan to a family of Catalan artists, he became court painter and a fixture of Versailles life. His sitters included virtually every major figure of the French court, and his studio produced hundreds of portraits to satisfy royal demand."
  },
  "Berthe Morisot": {
    born: "1841", died: "1895", nationality: "French",
    bio: "Morisot was a central figure of the Impressionist movement — the only woman to exhibit at the first Impressionist exhibition of 1874 — and one of its most technically innovative practitioners. Her intimate domestic scenes, painted with a loose airy brushstroke that seemed to dematerialize objects into light, explored a world of private femininity largely closed to her male colleagues. She was deeply connected to the Impressionist circle: a close friend and frequent model of Manet's, she married his brother Eugène in 1874. The critic Gustave Geffroy called her 'one of the three great ladies' of Impressionism."
  },
  "William-Adolphe Bouguereau": {
    born: "1825", died: "1905", nationality: "French",
    bio: "Bouguereau was the most celebrated academic painter of late 19th-century France, famous for technically perfect mythological and genre paintings that drew enormous crowds at the annual Salon. He embodied the official art establishment that the Impressionists rebelled against, opposing their admission to the Salon and dismissing their work as incompetent. His reputation collapsed almost immediately after his death but has recovered substantially since the 1980s, and his work is now recognized as the apex of the academic figurative tradition. He taught hundreds of students through the École des Beaux-Arts and the Académie Julian."
  },
  "Gustave Courbet": {
    born: "1819", died: "1877", nationality: "French",
    bio: "Courbet founded the Realist movement with the aggressive conviction that painting should show only what the painter could directly observe — no allegory, no mythology, no idealization. He painted peasants, workers, and the landscapes of his native Franche-Comté on a scale previously reserved for history painting, and exhibited his rejected works in his own pavilion outside the 1855 Exposition Universelle, inventing the model of the independent artist exhibition. A committed socialist, he participated in the Paris Commune of 1871 and died in Swiss exile. His influence on Manet, the Impressionists, and every subsequent Realist movement is immeasurable."
  },
  "Ramon Casas": {
    born: "1866", died: "1932", nationality: "Spanish (Catalan)",
    bio: "Ramon Casas i Carbó was the leading painter of Catalan Modernisme and a central figure of the circle at the Quatre Gats café in Barcelona, where the young Picasso also exhibited. He spent formative years in Paris absorbing Impressionism and the social realism of Toulouse-Lautrec, bringing that synthesis back to Spain in portraits and confrontational paintings of public executions and workers' demonstrations. His poster work made him the dominant graphic artist of early-20th-century Catalonia."
  },
  "Robert Delaunay": {
    born: "1885", died: "1941", nationality: "French",
    bio: "Delaunay developed Orphism — a lyrical, color-based variant of Cubism — through his research into the simultaneous contrast of colors derived from Chevreul's optical theories. Working alongside his wife Sonia Delaunay, he transformed Cubist structure into pure chromatic rhythm. His Eiffel Tower series and the Windows compositions dismantled pictorial space through color rather than line, influencing Klee, Macke, and the entire development of abstract painting."
  },
  "Francis Picabia": {
    born: "1879", died: "1953", nationality: "French",
    bio: "Picabia was the most restlessly protean artist of the early avant-garde, moving through Impressionism, Cubism, Dada, mechanomorphism, and Surrealism while systematically refusing any single stylistic identity. His 'machine' paintings of the 1910s used mechanical diagrams as ironic metaphors for human relationships and desires, and his Dada activities were as much artistic statements as the canvases themselves. He collaborated with Duchamp, Apollinaire, and Breton."
  },
  "María Blanchard": {
    born: "1881", died: "1932", nationality: "Spanish",
    bio: "Born with a physical disability that shaped her outsider perspective, Blanchard studied in Madrid before moving to Paris, where she became an intimate of the Cubist circle and one of the most accomplished Cubist painters of any nationality. Her work brings a warmth of color and emotional directness to the Cubist vocabulary that distinguishes it from the cooler analytical mode of Picasso and Braque. She was close friends with Juan Gris and Diego Rivera; her reputation has grown considerably since her death."
  },
  "José Gutiérrez Solana": {
    born: "1886", died: "1945", nationality: "Spanish",
    bio: "Solana was the most singular Spanish painter of his generation — a dark, independent visionary whose Expressionist canvases of Madrid's underworld, carnival, and death rituals recall Goya without imitating him. He was also a writer whose books about Spanish popular culture provide an essential literary complement to his painted world. His rejection of fashionable modernist movements made him simultaneously marginal and irreplaceable."
  },
  "Hermenegildo Anglada Camarasa": {
    born: "1871", died: "1959", nationality: "Spanish (Catalan)",
    bio: "Anglada Camarasa was the most celebrated Spanish society painter of the Belle Époque, acclaimed in Paris for his dazzling nocturnal scenes and decorative portraits that fused Symbolism, Art Nouveau, and Fauvist color intensity. He spent much of his career between Paris and Mallorca, where he eventually settled. His paintings of flamenco dancers, cabaret performers, and elegant socialites are among the most opulent decorative paintings produced by any Spanish artist."
  },
  "Ángeles Santos": {
    born: "1911", died: "2013", nationality: "Spanish",
    bio: "Ángeles Santos painted her monumental vision 'A World' at age 17, without formal training, in a state she described as creative fever — and was immediately befriended by Federico García Lorca and examined by psychiatrists debating whether her art was genius or illness. She stopped painting for decades after marrying, only returning to her art in the 1970s. Her early masterpiece remains one of the most astonishing debuts in the history of Spanish art."
  }
};

/* ── Artist portraits ────────────────────────────────────────────────────── */
const ARTIST_PORTRAITS = {
  "Leonardo da Vinci": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/330px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
  "Attributed to Leonardo da Vinci": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Francesco_Melzi_-_Portrait_of_Leonardo.png/330px-Francesco_Melzi_-_Portrait_of_Leonardo.png",
  "Michelangelo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg/330px-Michelangelo_Daniele_da_Volterra_%28dettaglio%29.jpg",
  "Raphael": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Raffaello_Sanzio.jpg/330px-Raffaello_Sanzio.jpg",
  "Sandro Botticelli": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sandro_Botticelli_083.jpg/330px-Sandro_Botticelli_083.jpg",
  "Titian": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Titian_-_Self-portrait_%28Museo_del_Prado%29.jpg/330px-Titian_-_Self-portrait_%28Museo_del_Prado%29.jpg",
  "Caravaggio": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Bild-Ottavio_Leoni%2C_Caravaggio.jpg/330px-Bild-Ottavio_Leoni%2C_Caravaggio.jpg",
  "Artemisia Gentileschi": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg/330px-Self-portrait_as_the_Allegory_of_Painting_%28La_Pittura%29_-_Artemisia_Gentileschi.jpg",
  "Rembrandt van Rijn": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
  "Johannes Vermeer": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg/330px-Cropped_version_of_Jan_Vermeer_van_Delft_002.jpg",
  "Jan van Eyck": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Jan_van_Eyck_-_Portrait_of_a_Man_%28Self_Portrait%3F%29_1433.jpg/330px-Jan_van_Eyck_-_Portrait_of_a_Man_%28Self_Portrait%3F%29_1433.jpg",
  "Peter Paul Rubens": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Peter_Paul_Rubens_-_Self-portrait_-_RH.S.180_-_Rubenshuis_%28after_restoration%29.jpg/330px-Peter_Paul_Rubens_-_Self-portrait_-_RH.S.180_-_Rubenshuis_%28after_restoration%29.jpg",
  "Diego Velázquez": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg/330px-Diego_Vel%C3%A1zquez_Autorretrato_45_x_38_cm_-_Colecci%C3%B3n_Real_Academia_de_Bellas_Artes_de_San_Carlos_-_Museo_de_Bellas_Artes_de_Valencia.jpg",
  "Francisco Goya": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg/330px-Vicente_L%C3%B3pez_Porta%C3%B1a_-_el_pintor_Francisco_de_Goya.jpg",
  "Pablo Picasso": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/330px-Pablo_picasso_1.jpg",
  "Vincent van Gogh": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
  "Paul Gauguin": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Paul_Gauguin_1891.png/330px-Paul_Gauguin_1891.png",
  "Paul Cézanne": "https://upload.wikimedia.org/wikipedia/commons/c/c4/Paul-Cezanne.jpg",
  "Claude Monet": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Claude_Monet_1899_Nadar_crop.jpg/330px-Claude_Monet_1899_Nadar_crop.jpg",
  "Pierre-Auguste Renoir": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Pierre_Auguste_Renoir%2C_uncropped_image.jpg/330px-Pierre_Auguste_Renoir%2C_uncropped_image.jpg",
  "Edgar Degas": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Self-portrait_by_Edgar_Degas.jpg/330px-Self-portrait_by_Edgar_Degas.jpg",
  "Édouard Manet": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg/330px-%C3%89douard_Manet%2C_en_buste%2C_de_face_-_Nadar.jpg",
  "Georges Seurat": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Georges_Seurat_1888.jpg/330px-Georges_Seurat_1888.jpg",
  "Henri Matisse": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Henri_Matisse%2C_1913%2C_photograph_by_Alvin_Langdon_Coburn.jpg/330px-Henri_Matisse%2C_1913%2C_photograph_by_Alvin_Langdon_Coburn.jpg",
  "Salvador Dalí": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Salvador_Dal%C3%AD_1939.jpg/330px-Salvador_Dal%C3%AD_1939.jpg",
  "René Magritte": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Portrait_en_buste_du_peintre_surr%C3%A9aliste_Ren%C3%A9_Magritte_%281898-1967%29_le_18_octobre_1961_devant_une_de_ses_toiles%2C_PH19994.jpg/330px-Portrait_en_buste_du_peintre_surr%C3%A9aliste_Ren%C3%A9_Magritte_%281898-1967%29_le_18_octobre_1961_devant_une_de_ses_toiles%2C_PH19994.jpg",
  "Joan Miró": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Portrait_of_Joan_Miro%2C_Barcelona_1935_June_13.jpg/330px-Portrait_of_Joan_Miro%2C_Barcelona_1935_June_13.jpg",
  "Jackson Pollock": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Jackson_Pollock%27s_passport_%28cropped%29.jpg/330px-Jackson_Pollock%27s_passport_%28cropped%29.jpg",
  "Andy Warhol": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg/330px-Andy_Warhol_at_the_Jewish_Museum_%28by_Bernard_Gotfryd%29_%E2%80%93_LOC.jpg",
  "Roy Lichtenstein": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Roy_Lichtenstein%2C_painter_1969_%28cropped%29.jpg/330px-Roy_Lichtenstein%2C_painter_1969_%28cropped%29.jpg",
  "Edward Hopper": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg/330px-Edward_Hopper%2C_New_York_artist_LCCN2016871478_%28cropped%29.jpg",
  "Grant Wood": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Grant_Wood.jpg/330px-Grant_Wood.jpg",
  "Mary Cassatt": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mary_Cassatt_photograph_1913.jpg/330px-Mary_Cassatt_photograph_1913.jpg",
  "Thomas Eakins": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Eakins_selfportrait.jpg/330px-Eakins_selfportrait.jpg",
  "John Singer Sargent": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/John_Singer_Sargent_1903.jpg/330px-John_Singer_Sargent_1903.jpg",
  "James McNeill Whistler": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Whistler_Selbstportr%C3%A4t.jpg/330px-Whistler_Selbstportr%C3%A4t.jpg",
  "Winslow Homer": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Winslow_Homer_by_Sarony.jpeg/330px-Winslow_Homer_by_Sarony.jpeg",
  "Edvard Munch": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Portrait_of_Edvard_Munch_%28cropped%29.png/500px-Portrait_of_Edvard_Munch_%28cropped%29.png",
  "Gustav Klimt": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Klimt.jpg/330px-Klimt.jpg",
  "Egon Schiele": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Egon_Schiele_-_Self-Portrait_with_Physalis_-_Google_Art_Project.jpg/330px-Egon_Schiele_-_Self-Portrait_with_Physalis_-_Google_Art_Project.jpg",
  "Frida Kahlo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg/330px-Frida_Kahlo%2C_by_Guillermo_Kahlo.jpg",
  "Rufino Tamayo": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rufino_Tamayo.jpg/330px-Rufino_Tamayo.jpg",
  "María Izquierdo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Mar%C3%ADa_Izquierdo.jpg/330px-Mar%C3%ADa_Izquierdo.jpg",
  "J.M.W. Turner": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Joseph_Mallord_William_Turner_auto-retrato.jpg/500px-Joseph_Mallord_William_Turner_auto-retrato.jpg",
  "John Constable": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/John_Constable_by_Ramsay_Richard_Reinagle.jpg/330px-John_Constable_by_Ramsay_Richard_Reinagle.jpg",
  "Thomas Gainsborough": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Thomas_Gainsborough_by_Thomas_Gainsborough.jpg/330px-Thomas_Gainsborough_by_Thomas_Gainsborough.jpg",
  "Thomas Lawrence": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Self-Portrait-1788%29_by_Sir_Thomas_Lawrence%2C_PRA.jpg/330px-Self-Portrait-1788%29_by_Sir_Thomas_Lawrence%2C_PRA.jpg",
  "Hans Holbein the Younger": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hans_Holbein_the_Younger%2C_self-portrait.jpg/330px-Hans_Holbein_the_Younger%2C_self-portrait.jpg",
  "Pieter Bruegel the Elder": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer%2C_ca._1566_-_Google_Art_Project.jpg/500px-Pieter_Bruegel_the_Elder_-_The_Painter_and_the_Buyer%2C_ca._1566_-_Google_Art_Project.jpg",
  "Hieronymus Bosch": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Jheronimus_Bosch_%28cropped%29.jpg/500px-Jheronimus_Bosch_%28cropped%29.jpg",
  "Rogier van der Weyden": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Rogier_Lamp_%28cropped%29.jpg/500px-Rogier_Lamp_%28cropped%29.jpg",
  "Fra Angelico": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fra_Angelico_portrait.jpg/500px-Fra_Angelico_portrait.jpg",
  "Fra Angelico and Fra Filippo Lippi": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Fra_Angelico_portrait.jpg/500px-Fra_Angelico_portrait.jpg",
  "Piero della Francesca": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Delle_vite_de%27_pi%C3%B9_eccellenti_pittori%2C_scultori%2C_et_architetti_%281648%29_%2814799608033%29.jpg/330px-Delle_vite_de%27_pi%C3%B9_eccellenti_pittori%2C_scultori%2C_et_architetti_%281648%29_%2814799608033%29.jpg",
  "Paolo Veronese": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Paolo_Veronese_008.jpg/330px-Paolo_Veronese_008.jpg",
  "Giorgione": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/%27Self-Portrait%27_of_Giorgione_by_Antonio_Canova%2C_1792.jpg/330px-%27Self-Portrait%27_of_Giorgione_by_Antonio_Canova%2C_1792.jpg",
  "Giorgione (completed by Titian)": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/%27Self-Portrait%27_of_Giorgione_by_Antonio_Canova%2C_1792.jpg/330px-%27Self-Portrait%27_of_Giorgione_by_Antonio_Canova%2C_1792.jpg",
  "Giovanni Bellini and Titian": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Giovanni_Bellini_Felt%C3%A9telezett%C3%96narck%C3%A9peKJ.jpg/330px-Giovanni_Bellini_Felt%C3%A9telezett%C3%96narck%C3%A9peKJ.jpg",
  "Canaletto": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Giovanni_Antonio_Canal.jpg/330px-Giovanni_Antonio_Canal.jpg",
  "Jacques-Louis David": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Jacques-Louis_David_-_Self-portrait%2C_1794.jpg/330px-Jacques-Louis_David_-_Self-portrait%2C_1794.jpg",
  "Eugène Delacroix": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Eug%C3%A8ne_Ferdinand_Victor_Delacroix_050.jpg/330px-Eug%C3%A8ne_Ferdinand_Victor_Delacroix_050.jpg",
  "Théodore Géricault": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Horace_Vernet%2C_Jean-Louis-Andr%C3%A9-Th%C3%A9odore_Gericault%2C_probably_1822_or_1823%2C_1998.84%2C_MET.jpg/330px-Horace_Vernet%2C_Jean-Louis-Andr%C3%A9-Th%C3%A9odore_Gericault%2C_probably_1822_or_1823%2C_1998.84%2C_MET.jpg",
  "Jean-Honoré Fragonard": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Jean-Honor%C3%A9_Fragonard_-_Self-portrait_in_a_Renaissance_costume.jpeg/330px-Jean-Honor%C3%A9_Fragonard_-_Self-portrait_in_a_Renaissance_costume.jpeg",
  "Nicolas Poussin": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Nicolas_Poussin_078.jpg/500px-Nicolas_Poussin_078.jpg",
  "Jean-François Millet": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Jean-Fran%C3%A7ois_Millet_by_Nadar%2C_Metropolitan_Museum_copy.jpg/330px-Jean-Fran%C3%A7ois_Millet_by_Nadar%2C_Metropolitan_Museum_copy.jpg",
  "Camille Corot": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Jean-Baptiste_Camille_Corot_-_autoportrait.jpg/500px-Jean-Baptiste_Camille_Corot_-_autoportrait.jpg",
  "Gustave Caillebotte": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Caillebotteautoportrait.jpg/500px-Caillebotteautoportrait.jpg",
  "Henri de Toulouse-Lautrec": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Photolautrec.jpg/500px-Photolautrec.jpg",
  "Henri Rousseau": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Henri_Rousseau_-_Myself-_Portrait_%E2%80%93_Landscape_-_Google_Art_Project.jpg/500px-Henri_Rousseau_-_Myself-_Portrait_%E2%80%93_Landscape_-_Google_Art_Project.jpg",
  "Piet Mondrian": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Piet_Mondriaan.jpg/330px-Piet_Mondriaan.jpg",
  "Amedeo Modigliani": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Amedeo_Modigliani_in_his_studio.jpg/330px-Amedeo_Modigliani_in_his_studio.jpg",
  "Georges de La Tour": null,
  "Frans Hals": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Frans_hals_%28da%29%2C_autoritratto.JPG/330px-Frans_hals_%28da%29%2C_autoritratto.JPG",
  "Carel Fabritius": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Carel_Fabritius_-_Self-Portrait_-_Google_Art_Project.jpg/330px-Carel_Fabritius_-_Self-Portrait_-_Google_Art_Project.jpg",
  "Jan Steen": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/1670_Jan_Havicksz._Steen_-_zelfportret.jpg/330px-1670_Jan_Havicksz._Steen_-_zelfportret.jpg",
  "Jan Davidsz. de Heem": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Jan_Lievens_-_Portrait_of_Jan_Davidsz._de_Heem.jpg/330px-Jan_Lievens_-_Portrait_of_Jan_Davidsz._de_Heem.jpg",
  "Paulus Potter": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bartholomeus_van_der_Helst_-_Paul_Potter.jpg/330px-Bartholomeus_van_der_Helst_-_Paul_Potter.jpg",
  "Giuseppe Arcimboldo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Giuseppe_Arcimboldo_-_Self_Portrait_-_Google_Art_Project.jpg/500px-Giuseppe_Arcimboldo_-_Self_Portrait_-_Google_Art_Project.jpg",
  "Juan Gris": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Juan_Gris%2C_portrait_photograph%2C_published_in_Les_Peintres_Cubistes%2C_1913.jpg/500px-Juan_Gris%2C_portrait_photograph%2C_published_in_Les_Peintres_Cubistes%2C_1913.jpg",
  "Marcel Duchamp": "https://upload.wikimedia.org/wikipedia/en/thumb/3/34/Man_Ray%2C_1920-21%2C_Portrait_of_Marcel_Duchamp%2C_gelatin_silver_print%2C_Yale_University_Art_Gallery.jpg/330px-Man_Ray%2C_1920-21%2C_Portrait_of_Marcel_Duchamp%2C_gelatin_silver_print%2C_Yale_University_Art_Gallery.jpg",
  "Francis Bacon": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Francis_Bacon_in_the_Library_of_Congress.Jpeg/330px-Francis_Bacon_in_the_Library_of_Congress.Jpeg",
  "Andrew Wyeth": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Andrew_Wyeth.jpg",
  "Jacob Lawrence": "https://upload.wikimedia.org/wikipedia/commons/c/cb/Portrait_of_Jacob_Lawrence_LCCN2004663191.jpg",
  "John Singleton Copley": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/John_Singleton_Copley_-_John_Singleton_Copley_Self-Portrait_-_Google_Art_Project.jpg/500px-John_Singleton_Copley_-_John_Singleton_Copley_Self-Portrait_-_Google_Art_Project.jpg",
  "John Trumbull": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Self_Portrait_by_John_Trumbull_circa_1802.jpeg/500px-Self_Portrait_by_John_Trumbull_circa_1802.jpeg",
  "Emanuel Leutze": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Emanuel_Leutze-crop.jpg/330px-Emanuel_Leutze-crop.jpg",
  "El Greco": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg/330px-El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg",
  "Francisco de Zurbarán": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Francisco_de_Zurbar%C3%A1n_autoportrait.jpg/330px-Francisco_de_Zurbar%C3%A1n_autoportrait.jpg",
  "Bartolomé Esteban Murillo": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Autorretrato_de_Murillo.jpg/330px-Autorretrato_de_Murillo.jpg",
  "José de Ribera": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Ribera_-_Self-portrait.jpg/330px-Ribera_-_Self-portrait.jpg",
  "School of Fontainebleau": null,
  "Jean Clouet": null,
  "Andrea Mantegna": null,
  "Jean-Auguste-Dominique Ingres": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Portrait_de_Jean-Auguste-Dominique_Ingres_(1780-1867)%2C_peintre._PH10351_(Cropped).jpg/330px-Portrait_de_Jean-Auguste-Dominique_Ingres_(1780-1867)%2C_peintre._PH10351_(Cropped).jpg",
  "Jean-Antoine Watteau": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/(Treviso)_The_painter_Antoine_Watteau_by_Rosalba_Carriera_-_Museo_civico_di_Santa_Caterina.jpg/330px-(Treviso)_The_painter_Antoine_Watteau_by_Rosalba_Carriera_-_Museo_civico_di_Santa_Caterina.jpg",
  "Hyacinthe Rigaud": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Autoportrait_au_turban_(Perpignan).jpg/330px-Autoportrait_au_turban_(Perpignan).jpg",
  "Berthe Morisot": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Morisot_berthe_photo.jpg/330px-Morisot_berthe_photo.jpg",
  "William-Adolphe Bouguereau": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Self_portrait%2C_by_William_Bouguereau.jpg/330px-Self_portrait%2C_by_William_Bouguereau.jpg",
  "Gustave Courbet": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gustave_Courbet%2C_photograph_Atelier_Nadar%2C_c._1860s.jpg/330px-Gustave_Courbet%2C_photograph_Atelier_Nadar%2C_c._1860s.jpg"
};

/* ── Museum info ─────────────────────────────────────────────────────────── */
const MUSEUMS_INFO = {
  "Louvre Museum": {
    city: "Paris", country: "France",
    blurb: "The world's largest and most visited art museum, the Louvre occupies a former royal palace on the banks of the Seine. Its collection spans 5,000 years of civilization — from ancient Egyptian antiquities to 19th-century European paintings — with over 35,000 works on display. The iconic glass pyramid entrance was added by I.M. Pei in 1989.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/330px-Louvre_Museum_Wikimedia_Commons.jpg"
  },
  "Metropolitan Museum of Art": {
    city: "New York", country: "USA",
    blurb: "The Met is the largest art museum in the United States and one of the greatest in the world, with a collection of over two million objects spanning 5,000 years across every culture. Its neoclassical Fifth Avenue facade has been a fixture of the Upper East Side since 1880, and its encyclopedic holdings range from Egyptian mummies to Impressionist masterpieces to contemporary installations.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg/330px-Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg"
  },
  "National Gallery": {
    city: "London", country: "United Kingdom",
    blurb: "Overlooking Trafalgar Square, the National Gallery houses one of the greatest collections of Western European painting in the world, spanning from 1250 to 1900. Founded in 1824, its collection was intentionally built to represent the full history of painting rather than to showcase royal taste, making it unusually democratic in scope. Entry is permanently free.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG/330px-Galer%C3%ADa_Nacional%2C_Londres%2C_Inglaterra%2C_2014-08-07%2C_DD_036.JPG"
  },
  "Museo del Prado": {
    city: "Madrid", country: "Spain",
    blurb: "The Prado is the national museum of Spain and the definitive showcase of Spanish art, as well as one of the world's greatest repositories of European Old Master painting. Its collection was built from the Spanish royal collections, giving it unrivaled holdings of Velázquez, Goya, and El Greco, as well as outstanding Flemish and Italian works. It opened to the public in 1819.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/330px-Museo_del_Prado_2016_%2825185969599%29.jpg"
  },
  "Rijksmuseum": {
    city: "Amsterdam", country: "Netherlands",
    blurb: "The Rijksmuseum is the Netherlands' national museum of art and history, with a collection representing 800 years of Dutch and Flemish achievement. Its grand neo-Gothic building, reopened after a decade-long renovation in 2013, is home to Rembrandt's Night Watch, Vermeer's Milkmaid, and the largest collection of Dutch Golden Age painting in the world.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg/330px-South_facade_of_the_Rijksmuseum_Amsterdam_%28DSCF0528%29.jpg"
  },
  "Uffizi Gallery": {
    city: "Florence", country: "Italy",
    blurb: "The Uffizi is the preeminent museum of Italian Renaissance painting, housed in a 16th-century administrative building commissioned by Cosimo I de' Medici. The Medici family's incomparable art collection — assembled over two centuries — forms its core, and no other museum can match its concentration of Botticelli, Leonardo, Michelangelo, Raphael, and Titian. The word 'uffizi' simply means 'offices.'",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Florence%2C_Italy_-_panoramio_%28125%29.jpg/330px-Florence%2C_Italy_-_panoramio_%28125%29.jpg"
  },
  "State Hermitage Museum": {
    city: "Saint Petersburg", country: "Russia",
    blurb: "The Hermitage is one of the largest and oldest museums in the world, occupying six buildings along the Neva River including the Winter Palace of the Tsars. Its collection of nearly three million objects was assembled primarily by Catherine the Great in the 18th century and includes extraordinary holdings of Dutch and Flemish masters, French Impressionists, and ancient antiquities.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/5174-3._St._Petersburg._Greater_Hermitage.jpg/330px-5174-3._St._Petersburg._Greater_Hermitage.jpg"
  },
  "Museum of Modern Art (MoMA)": {
    city: "New York", country: "USA",
    blurb: "MoMA is the museum that invented the modern canon — its collection of painting, sculpture, film, photography, and design from 1880 to the present is among the most influential in the world. Founded in 1929 by Abby Aldrich Rockefeller and others, it was the first institution to treat modern art with the same institutional seriousness as the Old Masters. Its midtown Manhattan building has been expanded four times.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/MoMa_NY_USA_1.jpg/330px-MoMa_NY_USA_1.jpg"
  },
  "Musée d'Orsay": {
    city: "Paris", country: "France",
    blurb: "The Musée d'Orsay occupies a Beaux-Arts railway station built for the 1900 World's Fair and holds the world's largest collection of Impressionist and Post-Impressionist masterpieces. Works by Monet, Renoir, Degas, Manet, Van Gogh, Gauguin, and Cézanne fill its spectacular iron-and-glass main hall. The building itself, saved from demolition in 1977, is as remarkable as its contents.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Mus%C3%A9e_D_Orsay_At_Sunset_%28134278411%29.jpeg/960px-Mus%C3%A9e_D_Orsay_At_Sunset_%28134278411%29.jpeg"
  },
  "Vatican Museums (Sistine Chapel)": {
    city: "Vatican City", country: "Vatican City",
    blurb: "The Vatican Museums comprise the pontifical art collections housed in a series of palaces adjacent to St. Peter's Basilica — among the oldest, largest, and richest museums in the world. The Sistine Chapel, with Michelangelo's ceiling and Last Judgment, is their most celebrated space, though the Vatican's holdings extend from classical antiquities to contemporary art. Over six million visitors pass through annually.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/8/82/Sistina-interno.jpg"
  },
  "Vatican Museums (Apostolic Palace)": {
    city: "Vatican City", country: "Vatican City",
    blurb: "The Apostolic Palace — the official residence of the Pope — contains the Raphael Rooms, four chambers decorated entirely by Raphael and his workshop between 1508 and 1524, including The School of Athens. These frescoed rooms, along with the Sistine Chapel next door, represent the highest achievement of Vatican Renaissance decoration and draw millions of visitors each year.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Raffael_Stanza_della_Segnatura.jpg/960px-Raffael_Stanza_della_Segnatura.jpg"
  },
  "Art Institute of Chicago": {
    city: "Chicago", country: "USA",
    blurb: "The Art Institute is the second-largest art museum in the United States and one of the most encyclopedic, with a collection spanning 5,000 years. Its Impressionist and Post-Impressionist holdings are among the finest outside of France, anchored by Seurat's A Sunday on La Grande Jatte. The bronze lions flanking its Michigan Avenue entrance have been a Chicago landmark since 1893.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Chicago_Art_Institute_-_Visitors_at_Facade_on_March_11th_2024.jpg"
  },
  "National Gallery of Art": {
    city: "Washington D.C.", country: "USA",
    blurb: "The National Gallery of Art on the National Mall houses one of the finest art collections in the United States, from medieval to contemporary, with particular strength in Italian Renaissance, Dutch, and American art. It was established by an act of Congress in 1937 with a gift from Andrew Mellon and has been free to the public since it opened in 1941. Its East Building, by I.M. Pei, opened in 1978.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/National_Gallery_of_Art_-_2026_%2855255088792%29.jpg/330px-National_Gallery_of_Art_-_2026_%2855255088792%29.jpg"
  },
  "Kunsthistorisches Museum": {
    city: "Vienna", country: "Austria",
    blurb: "The Kunsthistorisches Museum ('Museum of Art History') is Austria's greatest art institution, built by Emperor Franz Joseph I to house the imperial Habsburg collections and opened in 1891. Its Picture Gallery is among the finest in the world, with extraordinary holdings of Bruegel, Dürer, Vermeer, Rubens, and Titian. The building itself, by Gottfried Semper and Karl von Hasenauer, is a masterwork of Historicist architecture.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/AT_13763_Exterior_of_the_Kunsthistorisches_Museum%2C_Vienna-2397.jpg/960px-AT_13763_Exterior_of_the_Kunsthistorisches_Museum%2C_Vienna-2397.jpg"
  },
  "Österreichische Galerie Belvedere": {
    city: "Vienna", country: "Austria",
    blurb: "The Belvedere is a Baroque palace complex built for Prince Eugene of Savoy between 1714 and 1723, now housing Austria's most important art collection. The Upper Belvedere holds the world's largest collection of Gustav Klimt paintings, including The Kiss, as well as major works of Austrian Expressionism and international Symbolism. The gardens connecting the two palace buildings are among the finest Baroque landscapes in Europe.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Oberes_Belvedere_Wien.jpg/960px-Oberes_Belvedere_Wien.jpg"
  },
  "Mauritshuis": {
    city: "The Hague", country: "Netherlands",
    blurb: "The Mauritshuis is a small museum in the former palace of Count John Maurice of Nassau, housing the Royal Picture Gallery of the Netherlands. Its compact collection is of extraordinary quality, including Vermeer's Girl with a Pearl Earring, Rembrandt's The Anatomy Lesson, and major works by Rubens and Holbein. It is often called the most perfect small museum in the world.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Mauritshuis_exterior_02.jpg/960px-Mauritshuis_exterior_02.jpg"
  },
  "Van Gogh Museum": {
    city: "Amsterdam", country: "Netherlands",
    blurb: "The Van Gogh Museum holds the world's largest collection of works by Vincent van Gogh — over 200 paintings, 500 drawings, and 700 letters — most inherited from his brother Theo's family. Its permanent collection tells the story of Van Gogh's entire career, from his dark Dutch period through his sunlit Arles breakthrough to the final Auvers canvases. It is the most visited museum in the Netherlands.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Van_Gogh_Museum_Amsterdam_%2825674085523%29.jpg/960px-Van_Gogh_Museum_Amsterdam_%2825674085523%29.jpg"
  },
  "Tate Modern": {
    city: "London", country: "United Kingdom",
    blurb: "Tate Modern opened in 2000 in the converted Bankside Power Station on the South Bank of the Thames, and has become the world's most visited gallery of modern and contemporary art. Its permanent collection includes defining works of 20th-century art from Picasso, Matisse, Dalí, and Rothko to contemporary global artists. The vast Turbine Hall hosts annual large-scale commissions that have become cultural events in themselves.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tate_Modern_-_Bankside_Power_Station.jpg/960px-Tate_Modern_-_Bankside_Power_Station.jpg"
  },
  "Philadelphia Museum of Art": {
    city: "Philadelphia", country: "USA",
    blurb: "The Philadelphia Museum of Art, whose steps were immortalized by Rocky Balboa, is one of the largest art museums in the United States, with a collection of over 240,000 objects. Its holdings are particularly strong in American art, medieval European art, and works by Marcel Duchamp — its Arensberg Collection is the definitive Duchamp archive. The Greek Revival temple was designed in 1919.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/PhiladelphiaMuseumOfArt2017.jpg/960px-PhiladelphiaMuseumOfArt2017.jpg"
  },
  "Marmottan Monet Museum": {
    city: "Paris", country: "France",
    blurb: "The Marmottan Monet Museum in the Bois de Boulogne houses the world's largest collection of Claude Monet's work — over 300 paintings and sketches, including the original Impression, Sunrise that gave Impressionism its name. The collection was donated by Monet's son Michel in 1966 and is displayed in a 19th-century hunting lodge with purpose-built underground galleries. It is the most intimate major Impressionist museum in Paris.",
    photo: null
  },
  "Musée de l'Orangerie": {
    city: "Paris", country: "France",
    blurb: "Built in 1852 as a greenhouse for the orange trees of the Tuileries Garden, the Orangerie is now home to the Nymphéas — eight monumental water lily paintings that Monet designed specifically for two oval rooms, as a gift to France. Installed after his death in 1927, these immersive canvases remain among the most extraordinary encounters between art and architecture in existence. The museum also holds major Impressionist and Post-Impressionist works.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Mus%C3%A9e_de_l%E2%80%99Orangerie_exterior.JPG/960px-Mus%C3%A9e_de_l%E2%80%99Orangerie_exterior.JPG"
  },
  "National Museum of Norway": {
    city: "Oslo", country: "Norway",
    blurb: "The National Museum of Norway, which opened its new building in 2022, is the largest art museum in the Nordic countries. Its collection spans fine arts, architecture, and design from antiquity to the present. The most visited work is Edvard Munch's The Scream (1893 version), whose iconic image of existential anguish has become one of the most recognized paintings in the world. The building itself, on the waterfront by Aker Brygge, is a landmark of contemporary Norwegian architecture.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Nye_Nasjonalmuseet_%282022%29_%282%29.jpg/960px-Nye_Nasjonalmuseet_%282022%29_%282%29.jpg"
  },
  "Galleria Borghese": {
    city: "Rome", country: "Italy",
    blurb: "The Borghese Gallery occupies the casino of Cardinal Scipione Borghese in the Villa Borghese gardens and contains one of the finest private art collections ever assembled. Its sculpture collection, anchored by Bernini's masterpieces — Apollo and Daphne, The Rape of Proserpina, David — is unmatched. Visits are limited to two hours and must be booked in advance, making it among the most exclusive museum experiences in the world.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Galleria_borghese_facade.jpg/960px-Galleria_borghese_facade.jpg"
  },
  "San Luigi dei Francesi": {
    city: "Rome", country: "Italy",
    blurb: "San Luigi dei Francesi is the French national church in Rome, built in the 16th century, and is best known as the home of Caravaggio's Contarelli Chapel paintings — three monumental works depicting the life of St. Matthew that established him as the most radical painter in Rome. The church is an active place of worship, but the Contarelli Chapel draws art pilgrims from around the world.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/%C3%89glise_San_Luigi_Francesi_-_Rome_%28IT62%29_-_2021-08-28_-_2.jpg/330px-%C3%89glise_San_Luigi_Francesi_-_Rome_%28IT62%29_-_2021-08-28_-_2.jpg"
  },
  "Santa Maria delle Grazie": {
    city: "Milan", country: "Italy",
    blurb: "Santa Maria delle Grazie is a 15th-century church and Dominican convent in Milan, a UNESCO World Heritage Site since 1980. Its refectory wall bears Leonardo da Vinci's Last Supper, painted between 1495 and 1498 directly onto the plaster — not as a fresco but with experimental tempera, which began deteriorating almost immediately. Viewing is strictly limited to groups of 25 for 15 minutes, making it among the most controlled museum visits in the world.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Santa_Maria_delle_Grazie_Milan_2013.jpg/330px-Santa_Maria_delle_Grazie_Milan_2013.jpg"
  },
  "Wallace Collection": {
    city: "London", country: "United Kingdom",
    blurb: "The Wallace Collection is housed in Hertford House in Manchester Square and contains one of the finest private collections of art ever assembled — including Fragonard's The Swing, Hals' Laughing Cavalier, and works by Titian, Velázquez, and Rembrandt — all bequeathed to the nation in 1897 by Lady Wallace. Entry is free, and the collection cannot be lent, making it permanently and completely accessible only in London.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Front_entrance_to_the_Wallace_Collection%2C_Manchester_Square_-_geograph.org.uk_-_1600012.jpg/330px-Front_entrance_to_the_Wallace_Collection%2C_Manchester_Square_-_geograph.org.uk_-_1600012.jpg"
  },
  "Neue Galerie New York": {
    city: "New York", country: "USA",
    blurb: "The Neue Galerie is a small but extraordinary museum dedicated exclusively to German and Austrian art from 1890 to 1940, housed in a 1914 Fifth Avenue mansion. Its collection includes Klimt's Woman in Gold and major works of Vienna Secession, German Expressionism, and the Bauhaus. Founded in 2001 by Ronald Lauder and Serge Sabarsky, it is New York's most focused and intimate world-class museum.",
    photo: null
  },
  "Phillips Collection": {
    city: "Washington D.C.", country: "USA",
    blurb: "The Phillips Collection, founded in 1921 in Washington D.C., was the first museum of modern art in the United States. Its collection of Impressionist and modern art was assembled through the personal passion of Duncan Phillips, who lived in the building alongside his collection. Renoir's Luncheon of the Boating Party, acquired in 1923, is its centerpiece — one of the most beloved Impressionist paintings in America.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/The_Phillips_Collection.JPG/330px-The_Phillips_Collection.JPG"
  },
  "Barnes Foundation": {
    city: "Philadelphia", country: "USA",
    blurb: "The Barnes Foundation holds one of the world's great collections of Impressionist, Post-Impressionist, and early Modern art — assembled obsessively by Albert C. Barnes in the early 20th century — including 181 Renoirs, 69 Cézannes, 59 Matisses, and 46 Picassos. Barnes hung his collection in highly unconventional arrangements mixing paintings with ironwork and Native American objects. The collection moved from its original Merion, Pennsylvania home to a purpose-built Philadelphia building in 2012.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Barnes_Foundation_%2853574516274%29.jpg/330px-Barnes_Foundation_%2853574516274%29.jpg"
  },
  "J. Paul Getty Museum": {
    city: "Los Angeles", country: "USA",
    blurb: "The Getty Museum sits on a hilltop above Brentwood with views of Los Angeles and the Pacific, its modernist Richard Meier campus opened in 1997. Its collection spans 4,000 years of Western art, with particular strength in European paintings from the 14th to 19th centuries, illuminated manuscripts, and decorative arts. Admission is free; the travertine-clad buildings and gardens are considered masterworks of late-20th-century architecture.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Aerial_Getty_Museum.jpg/330px-Aerial_Getty_Museum.jpg"
  },
  "Huntington Library": {
    city: "San Marino", country: "USA",
    blurb: "The Huntington Library, Art Museum, and Botanical Gardens in San Marino, California is one of the great cultural institutions of the American West. Henry Huntington assembled an extraordinary collection of rare books, manuscripts, British and American art, and 120 acres of thematic gardens. Gainsborough's Blue Boy and Lawrence's Pinkie are its two most celebrated paintings, both acquired for staggering sums in the 1920s.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Huntington_Library.jpg/960px-Huntington_Library.jpg"
  },
  "Gemäldegalerie Alte Meister": {
    city: "Dresden", country: "Germany",
    blurb: "Dresden's Gemäldegalerie Alte Meister ('Old Masters Picture Gallery') houses one of the finest collections of European painting in the world, assembled by the Electors of Saxony in the 17th and 18th centuries. Raphael's Sistine Madonna and Giorgione's Sleeping Venus are its most celebrated works. The neoclassical building, reopened after World War II restoration, looks onto the Zwinger palace complex.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Dresden-Zwinger-Courtyard.11.JPG/330px-Dresden-Zwinger-Courtyard.11.JPG"
  },
  "Yale University Art Gallery": {
    city: "New Haven", country: "USA",
    blurb: "The Yale University Art Gallery, founded in 1832, is the oldest university art museum in the Western Hemisphere. Its collection of over 200,000 works spans all cultures and periods, with particular strength in American art, European paintings, and ancient Mediterranean objects. The 1953 Louis Kahn building, Kahn's first major commission, is a landmark of 20th-century American architecture and is free and open to the public.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Yale_University_Art_Gallery_exterior.jpg/330px-Yale_University_Art_Gallery_exterior.jpg"
  },
  "Museo Nacional Centro de Arte Reina Sofía": {
    city: "Madrid", country: "Spain",
    blurb: "The Reina Sofía is Spain's national museum of 20th-century and contemporary art, housed in a converted 18th-century hospital adjacent to the Prado. Its permanent collection covers the major Spanish and international movements of Modernism, Surrealism, and the avant-garde. Picasso's Guernica — relocated from MoMA to Madrid in 1981 following the restoration of democracy — is the defining work of the collection and one of the most powerful political paintings ever made.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Museo_Reina_Sofia-exterior.jpg/960px-Museo_Reina_Sofia-exterior.jpg"
  },
  "Museo de Arte Moderno": {
    city: "Mexico City", country: "Mexico",
    blurb: "The Museo de Arte Moderno in Chapultepec Park is Mexico's primary institution for modern and contemporary Mexican art, opened in 1964. Its collection is strongest in the muralist generation and the Mexican Modernists who followed — Rivera, Siqueiros, Tamayo, Kahlo, and Izquierdo — and its Kahlo holdings include The Two Fridas. The circular building, surrounded by trees in the park, is considered a landmark of mid-century Mexican architecture.",
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Museo_de_Arte_Moderno.jpg/960px-Museo_de_Arte_Moderno.jpg"
  }
};


