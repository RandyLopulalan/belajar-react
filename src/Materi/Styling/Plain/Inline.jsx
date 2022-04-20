const Inline = () =>{

    //inline css dalam function jika kesulitan nama
    const a = {
        color: "yellow",
        border: "2px solid red"
    }

    return(
        <div>
            <h1 style={a}>belajar inline css</h1>
            <button className="btn">hallo world</button>
        </div>
        // style css className btn akan di ambil dari plain.jsx
    )
}
export default Inline;
// problem/ tidak bisa
// banyak style css yg tidak support
// @media
// @keyframes
// :hover
// font fammily seperty sanse sherife
// autoprefixer / autocomplit / ketik manual