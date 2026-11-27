import './StatBar.css'

export default function StatBar(
    {name, current, max, type}
){
    const tauxRemplissage = (current / max) * 100;

    return <div className={`stat-bar stat-bar--${type}`}>
        <div className={"stat-bar__label"}>
            <span className={"stat-bar__name"}>{name}</span>
            <span className={"stat-bar__value"}>{current} / {max}</span>
        </div>
        <div className={"stat-bar__track"}>
            <div
                className={"stat-bar__fill"}
                style={{width: `${tauxRemplissage}%`}}></div>
        </div>
    </div>
}