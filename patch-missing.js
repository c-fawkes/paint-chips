// Patches missing image URLs with corrected titles or direct Wikimedia Commons URLs
const fs = require('fs');

const results = JSON.parse(fs.readFileSync('/tmp/paint-image-urls.json', 'utf8'));

// Direct Wikimedia Commons URLs for paintings with no WP thumbnail (fair-use or series pages)
const DIRECT = {
  10: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg/402px-Leonardo_da_Vinci_-_Virgin_and_Child_with_St_Anne_C2RMF_retouched.jpg',
  16: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_1857-1859_-_Mus%C3%A9e_d%27Orsay_Paris.jpg/399px-Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_1857-1859_-_Mus%C3%A9e_d%27Orsay_Paris.jpg',
  18: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/456px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg',
  20: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg/800px-Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg',
  30: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGirlBeforeMirror.jpg/429px-PicassoGirlBeforeMirror.jpg',
  31: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg/800px-Washington_Crossing_the_Delaware_by_Emanuel_Leutze%2C_MMA-NYC%2C_1851.jpg',
  33: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/800px-David_-_The_Death_of_Socrates.jpg',
  35: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Vincent_van_Gogh_-_Cypresses_-_Google_Art_Project.jpg/457px-Vincent_van_Gogh_-_Cypresses_-_Google_Art_Project.jpg',
  39: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Nighthawks_by_Edward_Hopper_1942.jpg/800px-Nighthawks_by_Edward_Hopper_1942.jpg',
  42: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Girl_with_Red_Hat.jpg/398px-Girl_with_Red_Hat.jpg',
  43: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/432px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg',
  48: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Paul_Cezanne_-_The_Large_Bathers.jpg/800px-Paul_Cezanne_-_The_Large_Bathers.jpg',
  57: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Van_der_Weyden_Deposition.jpg/534px-Van_der_Weyden_Deposition.jpg',
  65: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Artemisia_gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg/418px-Artemisia_gentileschi_-_Judith_Beheading_Holofernes_-_WGA8563.jpg',
  69: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/460px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg',
  70: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Vermeer_-_Woman_Reading_a_Letter.jpg/468px-Vermeer_-_Woman_Reading_a_Letter.jpg',
  72: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Rembrandt_van_rijn-zelfportret_als_apostel_paulus.jpg/425px-Rembrandt_van_rijn-zelfportret_als_apostel_paulus.jpg',
  79: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Vincent_Van_Gogh_-_Almond_blossom.jpg/800px-Vincent_Van_Gogh_-_Almond_blossom.jpg',
  80: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg',
  86: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1c/Weeping_Woman.jpg/398px-Weeping_Woman.jpg',
  88: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Rembrandt_Harmensz._van_Rijn_-_The_return_of_the_prodigal_son_%28detail%29_-_1766.jpg/418px-Rembrandt_Harmensz._van_Rijn_-_The_return_of_the_prodigal_son_%28detail%29_-_1766.jpg',
};

for (const [id, url] of Object.entries(DIRECT)) {
  results[id] = url;
  console.log(`Patched ${id}: ${url.slice(0, 80)}…`);
}

fs.writeFileSync('/tmp/paint-image-urls.json', JSON.stringify(results, null, 2));
const found = Object.values(results).filter(Boolean).length;
console.log(`\nTotal: ${found}/100 images now have URLs`);
