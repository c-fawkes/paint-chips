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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Maja_desnuda.jpg/330px-Maja_desnuda.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Las_Hilanderas_o_La_f%C3%A1bula_de_Aracne%2C_by_Diego_Vel%C3%A1zquez.jpg/330px-Las_Hilanderas_o_La_f%C3%A1bula_de_Aracne%2C_by_Diego_Vel%C3%A1zquez.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg/330px-Madame_X_%28Madame_Pierre_Gautreau%29%2C_John_Singer_Sargent%2C_1884_%28unfree_frame_crop%29.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Gertrude_Stein_by_Pablo_Picasso.jpg/330px-Gertrude_Stein_by_Pablo_Picasso.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg/330px-Pieter_Bruegel_the_Elder-_The_Harvesters_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Vincent_van_Gogh_-_Self-Portrait_with_Straw_Hat_-_Metropolitan_Museum_of_Art.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_with_Straw_Hat_-_Metropolitan_Museum_of_Art.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg/330px-Tiziano_-_Venere_di_Urbino_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Leonardo_da_Vinci_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg/330px-Leonardo_da_Vinci_-_Adorazione_dei_Magi_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_Merisi_da_Caravaggio_-_Bacchus_-_Google_Art_Project.jpg/330px-Michelangelo_Merisi_da_Caravaggio_-_Bacchus_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Piero_della_Francesca_042_detail.jpg/330px-Piero_della_Francesca_042_detail.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Jan_Vermeer_van_Delft_-_The_Love_Letter_-_WGA24674.jpg/330px-Jan_Vermeer_van_Delft_-_The_Love_Letter_-_WGA24674.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Jan_Vermeer_van_Delft_022.jpg/330px-Jan_Vermeer_van_Delft_022.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Jan_Steen_-_The_Merry_Family_-_Google_Art_Project.jpg/330px-Jan_Steen_-_The_Merry_Family_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Rembrandt_-_De_Staalmeesters-_het_college_van_staalmeesters_%28waardijns%29_van_het_Amsterdamse_lakengilde-_Google_Art_Project.jpg/330px-Rembrandt_-_De_Staalmeesters-_het_college_van_staalmeesters_%28waardijns%29_van_het_Amsterdamse_lakengilde-_Google_Art_Project.jpg",
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg/330px-Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_Google_Art_Project.jpg/330px-Claude_Monet_-_Stacks_of_Wheat_%28End_of_Summer%29_-_Google_Art_Project.jpg",
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/330px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Gainsborough_mrsmrAndrews.jpg/330px-Gainsborough_mrsmrAndrews.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sandro_Botticelli_-_Venus_and_Mars_-_National_Gallery%2C_London.jpg/330px-Sandro_Botticelli_-_Venus_and_Mars_-_National_Gallery%2C_London.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Michelangelo_Caravaggio_062.jpg/330px-Michelangelo_Caravaggio_062.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rembrandt_van_Rijn_-_Self-Portrait_at_the_Age_of_34.jpg/330px-Rembrandt_van_Rijn_-_Self-Portrait_at_the_Age_of_34.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/330px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Van_Gogh_-_Der_S%C3%A4mann_-_1888.jpeg/330px-Van_Gogh_-_Der_S%C3%A4mann_-_1888.jpeg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Van_Gogh_self-portrait_with_grey_felt_hat_1886-87.jpg/330px-Van_Gogh_self-portrait_with_grey_felt_hat_1886-87.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg/330px-Vincent_van_Gogh_-_The_yellow_house_%28%27The_street%27%29.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg/330px-Vincent_van_Gogh_-_Head_of_a_skeleton_with_a_burning_cigarette_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Vincent_van_Gogh_-_Fishing_Boats_on_the_Beach_at_Saintes-Maries-de-la-Mer.jpg/330px-Vincent_van_Gogh_-_Fishing_Boats_on_the_Beach_at_Saintes-Maries-de-la-Mer.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/La_musique%2C_by_Henri_Matisse%2C_1910._Oil_on_canvas._The_State_Hermitage_Museum%2C_St._Petersburg.jpg/330px-La_musique%2C_by_Henri_Matisse%2C_1910._Oil_on_canvas._The_State_Hermitage_Museum%2C_St._Petersburg.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Matiss._Red_room.jpg/330px-Matiss._Red_room.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Leonardo_da_Vinci_-_Madonna_%28Benois_Madonna%29_-_Google_Art_Project.jpg/330px-Leonardo_da_Vinci_-_Madonna_%28Benois_Madonna%29_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Rembrandt_van_Rijn_-_Old_Man_in_Red.jpg/330px-Rembrandt_van_Rijn_-_Old_Man_in_Red.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Jan_Vermeer_-_Lady_Writing_a_Letter_-_National_Gallery_of_Art.jpg/330px-Jan_Vermeer_-_Lady_Writing_a_Letter_-_National_Gallery_of_Art.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Jan_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg/330px-Jan_Vermeer_-_Woman_Holding_a_Balance_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Watson_and_the_Shark_by_John_Singleton_Copley%2C_1778.jpg/330px-Watson_and_the_Shark_by_John_Singleton_Copley%2C_1778.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Filippino_Lippi_and_Fra_Angelico_-_Adoration_of_the_Magi_-_Google_Art_Project.jpg/330px-Filippino_Lippi_and_Fra_Angelico_-_Adoration_of_the_Magi_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Giovanni_Bellini_and_Titian_-_The_Feast_of_the_Gods_-_Google_Art_Project.jpg/330px-Giovanni_Bellini_and_Titian_-_The_Feast_of_the_Gods_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Peter_Paul_Rubens_-_Daniel_in_the_Lions%27_Den_-_Google_Art_Project_%28cropped%29.jpg/330px-Peter_Paul_Rubens_-_Daniel_in_the_Lions%27_Den_-_Google_Art_Project_%28cropped%29.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Carel_Fabritius_-_The_Goldfinch_-_WGA7721.jpg/330px-Carel_Fabritius_-_The_Goldfinch_-_WGA7721.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Paulus_Potter_-_The_Bull_-_Google_Art_Project.jpg/330px-Paulus_Potter_-_The_Bull_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Rembrandt_-_Saul_and_David_-_Mauritshuis_621.jpg/330px-Rembrandt_-_Saul_and_David_-_Mauritshuis_621.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Claude_Monet_-_The_Japanese_Footbridge_-_Google_Art_Project.jpg/330px-Claude_Monet_-_The_Japanese_Footbridge_-_Google_Art_Project.jpg",
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg/330px-Rembrandt_-_The_Abduction_of_Europa_-_Google_Art_Project.jpg",
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/La_Joie_de_vivre_-_Henri_Matisse.jpg/330px-La_Joie_de_vivre_-_Henri_Matisse.jpg",
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg/330px-Declaration_of_Independence_%281819%29%2C_by_John_Trumbull.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Thomas_Lawrence_-_Pinkie%2C_1794_-_Huntington_Library.jpg/330px-Thomas_Lawrence_-_Pinkie%2C_1794_-_Huntington_Library.jpg",
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/The_snail_henri_matisse.jpg/330px-The_snail_henri_matisse.jpg",
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
    imageUrl: null,
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Fragonard%2C_The_Swing.jpg/330px-Fragonard%2C_The_Swing.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Judith_klimt.jpg/330px-Judith_klimt.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Gustav_Klimt_-_Death_and_Life_-_Google_Art_Project.jpg/330px-Gustav_Klimt_-_Death_and_Life_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Egon_Schiele_-_The_Family_-_Google_Art_Project.jpg/330px-Egon_Schiele_-_The_Family_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg/330px-Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project_%282%29.jpg/330px-Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project_%282%29.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Arcimboldo_Summer_1563.jpg/330px-Arcimboldo_Summer_1563.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Giorgione_-_The_Three_Philosophers_-_Google_Art_Project.jpg/330px-Giorgione_-_The_Three_Philosophers_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Edvard_Munch_-_The_Sick_Child_-_Google_Art_Project.jpg/330px-Edvard_Munch_-_The_Sick_Child_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Edvard_Munch_-_Puberty_-_Google_Art_Project.jpg/330px-Edvard_Munch_-_Puberty_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Michelangelo_-_Expulsion_from_paradise.jpg/330px-Michelangelo_-_Expulsion_from_paradise.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Raphael_-_Disputation_of_the_Holy_Sacrament.jpg/330px-Raphael_-_Disputation_of_the_Holy_Sacrament.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Raffaello_Sanzio_-_Parnassus_-_WGA18586.jpg/330px-Raffaello_Sanzio_-_Parnassus_-_WGA18586.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Raffaello_-_Dama_con_liocorno.jpg/330px-Raffaello_-_Dama_con_liocorno.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Michelangelo_Merisi_da_Caravaggio_-_Self-Portrait_as_the_Sick_Bacchus_-_Google_Art_Project.jpg/330px-Michelangelo_Merisi_da_Caravaggio_-_Self-Portrait_as_the_Sick_Bacchus_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Caravaggio_-_David_con_la_testa_di_Golia.jpg/330px-Caravaggio_-_David_con_la_testa_di_Golia.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Michelangelo_Merisi_da_Caravaggio_-_Madonna_dei_Palafrenieri_-_Google_Art_Project.jpg/330px-Michelangelo_Merisi_da_Caravaggio_-_Madonna_dei_Palafrenieri_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Johannes_Vermeer_-_Girl_Reading_a_Letter_at_an_Open_Window_-_Google_Art_Project.jpg/330px-Johannes_Vermeer_-_Girl_Reading_a_Letter_at_an_Open_Window_-_Google_Art_Project.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Giorgione_and_Tiziano%2C_Venere_dormiente_o_di_Dresda%2C_1508-1510_%28Dresden%29.jpg/330px-Giorgione_and_Tiziano%2C_Venere_dormiente_o_di_Dresda%2C_1508-1510_%28Dresden%29.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tizian_083.jpg/330px-Tizian_083.jpg",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/0_L%27Inspiration_de_saint_Matthieu_-_Caravage_%281602%29_%281%29.JPG/330px-0_L%27Inspiration_de_saint_Matthieu_-_Caravage_%281602%29_%281%29.JPG",
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
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Caravaggio_-_Martirio_di_san_Matteo.jpg/330px-Caravaggio_-_Martirio_di_san_Matteo.jpg",
    location: { continent: "Europe", country: "Italy", city: "Rome", museum: "San Luigi dei Francesi" }
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
