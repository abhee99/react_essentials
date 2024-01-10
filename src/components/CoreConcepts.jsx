import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from '../data.js'

export default function CoreConcepts() {
    return (<section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
            {/* one way */}
            {/* <CoreConcept title = {CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/>
      <CoreConcept title = {CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
      <CoreConcept title = {CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
      <CoreConcept title = {CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/> */}

            {/* better way */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]} />
      <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {/* best way */}
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title}{...item} />)}

        </ul>
    </section>)
}