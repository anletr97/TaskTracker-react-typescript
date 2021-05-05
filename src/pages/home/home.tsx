import * as SharedComponent from '../../shared-components/index'

function Home() {
    const Card = SharedComponent.Card;
    return (
        <div className="container" style={{width: 400}}>
            <Card hasHeader />
        </div>
    );
}

export default Home;