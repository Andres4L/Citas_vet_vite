import React from 'react'
import Pacientes from './Pacientes'
import { useEffect } from 'react'

const Listadop = ({ pacientes,setPaciente,eliminarPaciente}) => {

  useEffect(()=>{
if (pacientes.length > 0){
  console.log(' nuevo paciente')
}
  }, [pacientes]
  )

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen "> {/*overflow-y-scroll*/}

      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Administra tus {" "}
            <span className="text-indigo-600 font-bold">
              Pacientes y Citas
            </span>
          </p>
          {pacientes.map((paciente) => {

            return (
              <Pacientes
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            )
          })}
        </>
      ) : (

        <>
        <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 text-center mb-10">
            Comienza agregando pacientes {" "}
            <span className="text-indigo-600 font-bold">
              y apareeran en este lugar
            </span>
          </p>
        
        </>
      )}
    </div>

  )
}

export default Listadop