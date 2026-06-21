'use client';

import { useState } from 'react';

const plants = [
  { name: 'Desert Willow', botanical: 'Chilopsis linearis', category: 'Trees', sun: 'Full sun', water: 'Low', size: '20–30 ft.', bloom: 'Pink · Spring–fall', position: '0% 0%', note: 'An airy native tree with summer color and a light canopy suited to patios and natural desert compositions.' },
  { name: 'Hybrid Palo Verde', botanical: 'Parkinsonia hybrid', category: 'Trees', sun: 'Full sun', water: 'Low', size: '20–30 ft.', bloom: 'Yellow · Spring', position: '33.333% 0%', note: 'Signature green bark, filtered shade, and a dramatic spring bloom make this a strong desert focal tree.' },
  { name: 'Brittlebush', botanical: 'Encelia farinosa', category: 'Shrubs', sun: 'Full sun', water: 'Very low', size: '2–3 ft.', bloom: 'Yellow · Winter–spring', position: '66.666% 0%', note: 'Silver foliage and cheerful yellow flowers bring native desert texture to slopes, gravel gardens, and open sunny areas.' },
  { name: 'Pink Fairy Duster', botanical: 'Calliandra eriophylla', category: 'Shrubs', sun: 'Sun or light shade', water: 'Low', size: '3–5 ft.', bloom: 'Pink · Winter–spring', position: '100% 0%', note: 'Fine foliage and powder-puff blooms soften stonework while supporting hummingbirds and pollinators.' },
  { name: 'Red Yucca', botanical: 'Hesperaloe parviflora', category: 'Accents', sun: 'Full sun', water: 'Low', size: '3–4 ft.', bloom: 'Coral · Spring–summer', position: '0% 100%', note: 'A clean architectural accent with long flower spikes that performs well near entries, walls, and contemporary hardscape.' },
  { name: 'Desert Spoon', botanical: 'Dasylirion wheeleri', category: 'Accents', sun: 'Full sun', water: 'Very low', size: '4–6 ft.', bloom: 'Structural evergreen', position: '33.333% 100%', note: 'A bold native rosette for modern desert designs. Give its finely toothed leaves comfortable clearance from paths.' },
  { name: 'Pink Muhly', botanical: 'Muhlenbergia capillaris', category: 'Grasses', sun: 'Full sun', water: 'Low', size: '3–4 ft.', bloom: 'Pink plumes · Fall', position: '66.666% 100%', note: 'Soft, luminous fall plumes add movement and contrast against stone, gravel, and dark architectural backgrounds.' },
  { name: 'Texas Sage', botanical: 'Leucophyllum frutescens', category: 'Shrubs', sun: 'Full sun', water: 'Low', size: '5–8 ft.', bloom: 'Purple · Summer', position: '100% 100%', note: 'Heat-tough silver foliage and bursts of purple flowers make a reliable screen or informal flowering hedge.' },
];

export default function PlantGuide() {
  const categories = ['All', 'Trees', 'Shrubs', 'Accents', 'Grasses'];
  const [category, setCategory] = useState('All');
  const [selected, setSelected] = useState([]);
  const visible = category === 'All' ? plants : plants.filter(plant => plant.category === category);

  const togglePlant = plant => {
    const next = selected.includes(plant.name)
      ? selected.filter(name => name !== plant.name)
      : [...selected, plant.name];
    setSelected(next);
    window.dispatchEvent(new CustomEvent('plant-plan-update', { detail: next }));
  };

  return (
    <section id="plants" className="plantGuide sectionPad">
      <div className="plantGuideHeading">
        <div>
          <p className="kicker">Arizona Plant Guide</p>
          <h2>Plants that belong<br />in the desert.</h2>
        </div>
        <div>
          <p>Explore heat-ready plants that pair beautifully with stone, turf, outdoor living, and low-water landscapes across Greater Phoenix.</p>
          <p className="plantDisclaimer">Mature size and water needs vary by site, irrigation, and pruning. Verify placement around pools, pets, utilities, and walkways before planting.</p>
        </div>
      </div>
      <div className="plantFilters" aria-label="Plant categories">
        {categories.map(item => <button type="button" className={category === item ? 'active' : ''} onClick={() => setCategory(item)} key={item}>{item}</button>)}
      </div>
      <div className="plantGrid">
        {visible.map(plant => (
          <article className="plantCard" key={plant.name}>
            <div className="plantPhoto" style={{ backgroundPosition: plant.position }} role="img" aria-label={plant.name} />
            <div className="plantCardBody">
              <div className="plantTitle">
                <div><span>{plant.category}</span><h3>{plant.name}</h3><em>{plant.botanical}</em></div>
                <button type="button" className={selected.includes(plant.name) ? 'selected' : ''} onClick={() => togglePlant(plant)}>
                  {selected.includes(plant.name) ? 'Added' : 'Add to plan'}
                </button>
              </div>
              <p>{plant.note}</p>
              <dl>
                <div><dt>Sun</dt><dd>{plant.sun}</dd></div>
                <div><dt>Water</dt><dd>{plant.water}</dd></div>
                <div><dt>Size</dt><dd>{plant.size}</dd></div>
                <div><dt>Season</dt><dd>{plant.bloom}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </div>
      <div className="plantPlan">
        <span>Your plant plan</span>
        <p>{selected.length ? selected.join(' · ') : 'Choose plants to carry them into your Yard Design Studio summary.'}</p>
        <a href="#studio">Return to the design studio</a>
      </div>
      <p className="plantSource">Plant guidance references the Arizona Municipal Water Users Association’s low-water landscape resources.</p>
    </section>
  );
}
