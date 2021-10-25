

const Dashboard = () => {
    return (
        <div className="d-flex">
            <div style={SidebarView}>
                Hey
            </div>
            <div style={Dashview}>
                Hi
            </div>
        </div>
    )
}

export default Dashboard;

const SidebarView = {
    background: "#093c09",
    padding: "10px",
    height: "100vh",
    width: "28%"
}
const Dashview = {
    background: "#f1f0f0",
    width: "100%",
    height: "100vh",
    padding: "25px",
    borderTopLeftRadius: "3em",
    borderBottomLeftRadius: "3em",
    marginLeft: "-42px"
}