function Greet(props) {
    const welcomeMessage = <h2>welcome {props.name}</h2>;
    const loginPrompt = <h2>please login!</h2>;

    return(
        props.loggedIn ? welcomeMessage : loginPrompt
    );

}
Greet.defaultProps = {
    name: 'Guest'
}

export default Greet