// import react from 'react';

const card = (props) => {
    const { id, name, email } = props;
    return (
        <div className='tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5'>
            <img alt='Robots' src={`https://robohash.org/${id}?size=200x200`}></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}
export default card;