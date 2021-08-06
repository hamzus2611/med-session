import React from 'react'
import { ListGroup } from 'react-bootstrap'

function Accueil() {
  return (
    <div>
      <div class="list-group">
        <button type="button" class="list-group-item list-group-item-action active" aria-current="true">
          The current button
        </button>
        <button type="button" class="list-group-item list-group-item-action">Rendez-vous d'aujord'hui</button>
        <button type="button" class="list-group-item list-group-item-action">Fichies des patients</button>
        <button type="button" class="list-group-item list-group-item-action">consulter la salle d'attente</button>
        <button type="button" class="list-group-item list-group-item-action" /*disabled*/>cree un randez-vous</button>
      </div>
    </div>
  )
}

export default Accueil
