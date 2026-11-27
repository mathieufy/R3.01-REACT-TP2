import StatBar from "./StatBar.jsx";

const statsDefault = [
    {
        name: "Vitesse",
        current: "115",
        max: "130",
        type: "stamina"
    },
    {
        name: "Compte-tour",
        current: "2100",
        max: "6600",
        type: "mana"
    },
    {
        name: "Temperature huile",
        current: "90",
        max: "150",
        type: "hp"
    },

];

export default function StatBars({stats = statsDefault}) {
    return (
        stats.map((stat) => {
            return <StatBar key={stat.name} {...stat} /> // Mettre la key pour optimiser
        })
    )

    // return (<StatBar name={"john"} current={"11"} max={"25"} type={"hp"}/>);
}