const menuStyle = {
    menu: {
        padding: "2rem 2.25rem 1rem",
        margin: "0 auto",
        maxWidth: "50rem",
        backgroundColor: "var(--light)",
        boxShadow: "0 0 1rem rgba(0, 0, 0, 0.1)"
    },
    menuItem: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "1.5rem"
    },
    menuPrice: {
        flex: "1 1 100%",
        margin: "0.75rem 0 0",
        color: "var(--secondary)"
    },
    mains: {
        gridColumn: "1 / 2"
    },
    mainsName: {
        flex: "1 1 100%",
        margin: "0.75rem 0 0",
        color: "var(--secondary)"
    },
    aside: {
        gridColumn: "2 / 3"
    },
    mainsDescription: {
        flex: "1 1 100%",
        margin: "0.75rem 0 0",
        color: "var(--secondary)"
    }
};

export default menuStyle;