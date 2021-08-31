

const P03Dashboard = ({
    AuthButton = undefined
}) => {

    return (
        <main className="P03Dashboard">
            <h1>Dashboard</h1>
            <p>A date range is provided, all data between these dates are visualised</p>
            {AuthButton}
        </main>
    );
}
 export default P03Dashboard;