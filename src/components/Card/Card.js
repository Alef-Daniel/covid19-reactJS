import './style.css'

export default function Card({casos}) {
  
 
 const{cases, todayCases, country, deaths, todayDeaths,totalTests} = casos || {}
  

 



  return ( 
    <div className='container'>
      <div className='info'>
        <h3 className='title'>{country}</h3>
        <p>Total de casos: {parseInt(cases).toLocaleString('pt-br')} </p>
        <p>Total de casos hoje: {parseInt(todayCases).toLocaleString('pt-br')} </p>
        <p>Mortes:{parseInt(deaths).toLocaleString('pt-br')} </p>
        <p>Mortes hoje:{parseInt(todayDeaths).toLocaleString('pt-br')} </p>
        <p>Total de testes:{parseInt(totalTests).toLocaleString('pt-br')} </p>   
         
      </div>
    </div>
        
          
   
  )
}
