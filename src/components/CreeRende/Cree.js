
import React from 'react'
import { Button } from 'react-bootstrap'
import './Cree.css'

function Folder() {
    return (
        <div>
            <div className="mahi_holder">
                <div className="container">
                    <div className="row bg_1">
                        <h2><i>Cree un rendez-vous</i></h2>
                        <div className="col-3">
                            <input className="effect-1" type="text" placeholder="NOM" />
                            <span className="focus-border"></span>
                        </div>
                        <div className="col-3">
                            <input className="effect-2" type="text" placeholder="PreNOM" />
                            <span className="focus-border"></span>
                        </div>
                        <div className="col-3">
                            <input className="effect-3" type="Date" placeholder="Date" />
                            <span className="focus-border"></span>
                        </div>
                        <div className="col-3">
                            <input className="effect-4" type="text" placeholder="Adresse" />
                            <span className="focus-border"></span>
                        </div>
                        <div className="col-3">
                            <input className="effect-5" type="text" placeholder="Remarque" />
                            <span className="focus-border"></span>
                        </div>
                        <div >
                            <Button>Enregistre </Button>
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Folder
