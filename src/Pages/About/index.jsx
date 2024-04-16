import Card from '@/Components/Card'
import '@fontsource-variable/onest'

export default function About() {
  return (
    <>
      <div className='mx-auto max-w-screen-lg md:w-full md:max-w-4xl'>
        <article className='pt-28 text-5xl font-bold text-center'>
          <span className='text-white'>Sobre nuestro Equipo</span>
        </article>
        <div className='grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800'>
          <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
            <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Desarrolladores Frontend
              </h3>
              <p className='my-4'>
                Experto en crear interfaces de usuario atractivas y funcionales.
                Trabaja en estrecha colaboración con diseñadores y
                desarrolladores backend para implementar la lógica de frontend y
                garantizar una experiencia de usuario fluida.
              </p>
            </blockquote>
            <figcaption className='flex items-center justify-center '>
              <img
                className='rounded-full w-9 h-9'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png'
                alt='profile picture'
              />
              <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
                <div>Bonnie Green</div>
                <div className='text-sm text-gray-500 dark:text-gray-400 '>
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700'>
            <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Desarrolladores Backend
              </h3>
              <p className='my-4'>
                Especializado en la creación de la lógica de servidor y la
                gestión de bases de datos para garantizar el funcionamiento
                eficiente de la aplicación. Colabora estrechamente con el equipo
                frontend para implementar las funcionalidades requeridas.
              </p>
            </blockquote>
            <figcaption className='flex items-center justify-center '>
              <img
                className='rounded-full w-9 h-9'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png'
                alt='profile picture'
              />
              <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
                <div>Roberta Casas</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                  Lead designer at Dropbox
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700'>
            <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Equipo de Desarrollo
              </h3>
              <p className='my-4'>
                Nuestro equipo se destaca por su capacidad de colaboración y
                comunicación efectiva. Con una metodología de trabajo ágil,
                estamos preparados para enfrentar cualquier desafío y producir
                resultados excepcionales.
              </p>
            </blockquote>
            <figcaption className='flex items-center justify-center '>
              <img
                className='rounded-full w-9 h-9'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png'
                alt='profile picture'
              />
              <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
                <div>Jese Leos</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                  Software Engineer at Facebook
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700'>
            <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Desarrollador DevOps
              </h3>
              <p className='my-4'>
                Encargado de implementar y gestionar las herramientas y procesos
                necesarios para facilitar la colaboración entre los equipos de
                desarrollo y operaciones. Automatiza tareas y garantiza la
                disponibilidad y confiabilidad de los sistemas.
              </p>
            </blockquote>
            <figcaption className='flex items-center justify-center '>
              <img
                className='rounded-full w-9 h-9'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png'
                alt='profile picture'
              />
              <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
                <div>Bonnie Green</div>
                <div className='text-sm text-gray-500 dark:text-gray-400 '>
                  Developer at Open AI
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center'>
          <Card
            name='Aarón Apaza Barra'
            img='https://avatars.githubusercontent.com/u/77572214?v=4'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Andre Gacia Aragon'
            img='https://avatars.githubusercontent.com/u/77572214?v=4'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Luis Gutierrez Martinez'
            img='https://avatars.githubusercontent.com/u/77572214?v=4'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Alfredo Mescco Quispe'
            img='https://avatars.githubusercontent.com/u/77572214?v=4'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Dante Rodríguez Chambi'
            img='https://avatars.githubusercontent.com/u/77572214?v=4'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Patrico Venero Medina'
            img='https://avatars.githubusercontent.com/u/77572214?v=4'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
          <Card
            name='Yefferson Zuñiga Justo'
            img='https://avatars.githubusercontent.com/u/77572214?v=4'
            linkdlind='https://www.linkedin.com/in/aaron-daniel-apaza-barra-7b1b3b1b3/'
            github=''
          />
        </div>
      </div>
    </>
  )
}
