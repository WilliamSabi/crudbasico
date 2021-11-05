
import React, { useState } from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre, setNombre] = useState("")
    const [listanombres, setlistanombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id, setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        // setlistanombres(nombre)
        if (!nombre.trim()) {

            // console.log("El campo nombre esta vacio")
            setError('El campo nombre esta vacio')
            return
        }
        const nuevonombre = {
            id: uniqid(),
            tituloNombre: nombre
        }
        setlistanombres([...listanombres, nuevonombre])
        setNombre('')
        setError(null)

    }

    const deleteNombre = (id) => {

        const nuevaArray = listanombres.filter(item => item.id !== id)

        setlistanombres(nuevaArray)

    }

    const editar = (item) => {


        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editarNombre = (e) => {
        e.preventDefault()

        const nuevoArray = listanombres
            .map(item => item.id === id ? { id: id, tituloNombre: nombre } : item)

        setlistanombres(nuevoArray)
        setModoEdicion(false)
        setNombre(' ')


    }

    return (
        
        <div className="container">
            
            <div class="body-inner">

<section class="hero-area content-left" id="home">
   <div class="banner-item">
      <div class="container">
         <div class="row">
            <div class="col-lg-6">
               <div class="banner-content-wrap">
                     <div class="countdown wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
                           <div class="counter-item">
                              <i class="icon icon-ring-1Asset-1"></i>
                              <span class="days">24</span>
                              <div class="smalltext">Día</div>

                           </div>
                           <div class="counter-item">
                              <i class="icon icon-ring-4Asset-3"></i>
                              <span class="hours">10</span>
                              <div class="smalltext">Mes</div>
                           </div>
                           <div class="counter-item">
                              <i class="icon icon-ring-3Asset-2"></i>
                              <span class="minutes">2021</span>
                              <div class="smalltext">Año</div>
                           </div>
                          
                        </div>

                  <h1 class="banner-title wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">
                     Estilo De Vida Natural
                  </h1>
                  <p class="banner-info wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">UTP G7:
                     Todo lo que necesitas en 
                     un mismo lugar</p>
                     
                  <div class="banner-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
                     <router-link to="/solicitar"><a href="a" class="btn">¡Comprar YA!</a></router-link>
                  </div>

               </div>
    
            </div>
         </div>
      </div>

   </div>
</section>



<section id="about" class="ts-intro event-intro">
   <div class="container">
      <div class="row">
         <div class="col-lg-8 mx-auto">
            <h2 class="section-title white">
               <span>Conoce Nuestras</span>
               Caracteristicas
            </h2>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-4">
            <div class="single-intro-text">
               <i class="icon-speaker"></i>
               <h3 class="ts-title">Comodidad Pura</h3>
               <p>
                  Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
               </p>
            </div>
         </div>
         <div class="col-lg-4">
            <div class="single-intro-text">
               <i class="icon-people"></i>
               <h3 class="ts-title">Buenas Personas</h3>
               <p>
                  Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
               </p>
            </div>
         </div>

         <div class="col-lg-4">
            <div class="single-intro-text">
               <i class="icon-fun"></i>
               <h3 class="ts-title">Diversión Pura</h3>
               <p>
                  Cómo transforma su negocio en la dinámica de la industria de la tecnología, el consumidor y los hábitos
               </p>
            </div>
         </div>

      </div>
   </div>

</section>



<section id="ts-speakers" class="ts-speakers">
   <div class="container">
      <div class="row">
         <div class="col-lg-8 mx-auto">
            <h2 class="section-title white text-center">
               <span>Conece sus</span>
               Beneficios
            </h2>
         </div>
      </div>
      <div class="row">
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="400ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/habitacion1.jpg" alt=""/>
                  <a href="a" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Comodidad</a></h3>
                  <p>
                     Habitaciones
                  </p>
               </div>
            </div>

         </div> 
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="500ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/bbq.jpg" alt=""/>
                  <a href="a"  class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Comida Y Fiesta</a></h3>
                  <p>
                     Salon BBQ
                  </p>
               </div>
            </div>

         </div> 
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="600ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/naturaleza.jpg" alt=""/>
                  <a href="a" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Naturaleza</a></h3>
                  <p>
                     Zonas Verdes
                  </p>
               </div>
            </div>

         </div> 
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="700ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/parque.jpg" alt=""/>
                  <a href="a" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Niños y Niñas</a></h3>
                  <p>
                     Parques Infantiles
                  </p>
               </div>
            </div>

         </div>
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="800ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/canchas.jpg" alt=""/>
                  <a href="a" class="view-speaker  ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Diversión</a></h3>
                  <p>
                     Deportes
                  </p>
               </div>
            </div>

         </div>
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="900ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/piscina.jpg" alt=""/>
                  <a href="a" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Agua y Más </a></h3>
                  <p>
                     Piscina
                  </p>
               </div>
            </div>

         </div>
         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1000ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/salon.jpg" alt=""/>
                  <a href="a" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Comunidad </a></h3>
                  <p>
                     Salon Social
                  </p>
               </div>
            </div>

         </div>

         <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1100ms">
            <div class="ts-speaker white-text">
               <div class="speaker-img">
                  <img class="img-fluid" src="../assets/images/caracter/parqueadero.jpg" alt=""/>
                  <a href="#popup_8" class="view-speaker ts-image-popup" data-effect="mfp-zoom-in">
                              <i class="icon icon-plus"></i>
                          </a>
               </div>
               <div class="ts-speaker-info">
                  <h3 class="ts-title"><a href="a">Vehículos </a></h3>
                  <p>
                     Parqueadero
                  </p>
               </div>
            </div>
            
         </div> 
      </div>
   </div>




</section>





<div class="footer-area">

   <footer class="ts-footer ts-footer-item">
      <div class="container">
         <div class="row footer-border">
            <div class="col-lg-6">


               <div class="footer-menu mb-30">
                  <ul>
                     <li><a href="s">Articulos</a></li>
                     <li><a href="s">Caracteristicas</a></li>
                     <li><a href="s">Beneficios</a></li>
                     <li><a href="s">Contacto</a></li>
                     <li><a href="s">Ingresar</a></li>
                  </ul>
               </div>

               

            </div>
            <div class="col-lg-6">
               
               <div class="copyright-text text-right">
                  <p>Copyright &copy; 2021 <a href="index.html">UTP G7</a> - Todos Los Derechos Reservados.</p>
               </div>
            </div>
         </div>
      </div>
   </footer>


</div>

</div>





            <h2>Aplicacion de crud basica</h2>
            <div class="col">
                <div className="row">
                    <div className="col">
                        <h2>Listado nombres</h2>
                        <ul className="list-group">

                            {/* <li className="list-group-item"> Item 1</li> */}
                            {

                                listanombres.map(item =>
                                    <li key="item.id" className="list-group-item">
                                        {item.tituloNombre}

                                        <button className="btn btn-danger float-end"
                                            onClick={() => { deleteNombre(item.id) }}
                                        >
                                            Borrar
                                        </button>

                                        <button className="btn btn-info float-end"
                                            onClick={() => { editar(item) }}
                                        >
                                            Editar
                                        </button>
                                    </li>

                                )
                            }
                        </ul>
                    </div>
                    <div className="col">
                        <h2>Formulario para añadir nombres</h2>
                        {/* <form onSubmit={(e) => addNombre(e)} className="form-group"> */}
                        <form onSubmit={modoEdicion ? editarNombre : addNombre} className="form-group">
                            <input
                                onChange={(e) => { setNombre(e.target.value) }}
                                className="form-control mb-3" type="text"
                                placeholder="Introduce le nombre"
                                value={nombre}
                            />
                            <input
                                className="btn btn-info btn-block mb-3"
                                type="submit"
                                value={modoEdicion ? 'Editar nombre' : 'Registrar nombre'} />
                        </form>
                        {
                            error != null ? (
                                <div className="alert alert-danger">
                                    {error}
                                </div>

                            ) :
                                (
                                    <div></div>
                                )

                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listadonombres;
