import Card from'./card'
function Tours({tours , removeTour,fixTour}){
    return(
        <div className='container'>
            <div>
            <h2 className='title'>Plan With Goldi</h2>
            </div>
            <div x
            className='cards'>
                {
                 tours.map( (tour)  => {
                  return <Card key={tour.id} {...tour} removeTour={removeTour} fixTour={fixTour}></Card>  
                 } )
                }
            </div>
        </div>
    )

}
export default Tours;