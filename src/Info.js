import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './Info.css';

function Info() {
    return (
        <div className="main">
            <div className="projectTitle">
                <Link to="/">
                    <FaHome className='iconHome' />
                </Link>
                <h2 className='subtitles'>INFO</h2>
            </div>


            <div className="descrizione">
                <h1>
                    Vendesi Fantic 50 Casa Motard, anno 2018, immatricolata il 25/07/2018. La moto è stata acquistata dal precedente proprietario presso il concessionario ufficiale Fantic Bruno Moto (BG). Si tratta di una moto curata e tenuta con grande attenzione, pronta per essere guidata.
                </h1>

            </div>

            <br />

            <div className="pregi">
                <h2 className='subtitles'>PREGI</h2>
                <ul>
                    <li>La moto è stata completamente smontata, pulita e rimontata con cura, mantenendo tutti i pezzi originali. L'unica modifica riguarda l'albero motore rinforzato, sostituito in seguito a una precedente elaborazione.</li>
                    <li>Il gruppo termico, l'albero motore rinforzato e tutti i componenti principali hanno percorso meno di 15.000 km.</li>
                    <li>Gomme nuove con meno di 100 km di utilizzo.</li>
                    <li>Frecce, fari anabbaglianti/abbaglianti perfettamente funzionanti.</li>
                    <li>Conta chilometri originale Fantic funzionante.</li>
                    <li>Albero motore:  TOP spalle piene.</li>
                    <li>Gomme: Pirelli Diablo Rosso 2.</li>
                    <li>Blocca sterzo funzionante.</li>
                    <li>La moto è stata verificata in ogni dettaglio e tutti i componenti elettrici funzionano correttamente.</li>
                    <li>Insieme do anche manopole nere/rosse domino usate pochissimo-dispongo del manuale di istruzioni del veicolo.</li>
                </ul>

            </div>

            <br />

            <div className="difetti">
                <h2 className='subtitles'>DIFETTI</h2>
                <ul>
                    <li>Alcuni graffi leggeri sui cerchi e segni più evidenti sul forcellone (é una moto usata).</li>
                    <li>Mancanza del pulsante del clacson..</li>
                    <li>Assenza delle grafiche originali, rimosse a causa di un inizio di distacco. Le grafiche sono ancora presenti sui paramani e sui forcelloni.</li>
                    <li>2 attacchi motore del telaio sono stati risaldati dopo la rottura.</li>
                </ul>

            </div>

            <br />

            <div className="pezzi-a-parte">

                <h2 className='subtitles'>PEZZI A PARTE</h2>
                <ul>
                    <li>Marmitta KatRace passaggio basso calcolata 76cc</li>
                    <li>Collettore 360 Polini</li>
                    <li>Pacco Lamellare VL18</li>
                    <li>Carburatore mikuni 24</li>
                    <li>Accensione mvt dd12 con luci</li>
                    <li>Gas Rapido Polini</li>
                    <li>Secondo radiatore fantic</li>
                </ul>
            </div>

            <br />

        

            <div className="conclusioni">


                <h2 className='subtitles'>CONCLUSIONI</h2>
                <p>Questo Fantic 50 Casa 2018 è un'ottima opportunità per chi cerca un motard affidabile e ben curato, Ideale per chi vuole una moto pronta all'uso con pochi dettagli da sistemare.</p>
                <p>Prezzo trattabile, non esitate a contattarmi per ulteriori informazioni o per organizzare una visita.</p>
                <p>No perditempo grazie.</p>
            </div>

            <br />


        </div>

    )
}

export default Info