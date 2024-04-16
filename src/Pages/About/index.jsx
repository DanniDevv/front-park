import Card from '@/Components/Card'
import '@fontsource-variable/onest'

export default function About() {
  return (
    <>
      <div className='mx-auto max-w-screen-lg md:w-full md:max-w-4xl'>
        <article className='pt-28 text-5xl font-bold text-center'>
          <h1 className='text-white'>Sobre nuestro Equipo</h1>
        </article>
        <article className='text-2xl flex justify-center py-7 md:px-10 md:max-w-4xl text-white'>
          Somos un quipo de desarrolladores trabajando en estrecha colaboración
          para crear una aplicación innovadora y funcional. Con habilidades
          especializadas en diferentes áreas, como diseño de interfaz de
          usuario, desarrollo frontend y backend, así como gestión de bases de
          datos, el equipo combina sus fortalezas para lograr un producto final
          de alta calidad.
        </article>

        {/* <div className='grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800'>
          <figure className='flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700'>
            <blockquote className='max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400'>
              <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
                Very easy this was to integrate
              </h3>
              <p className='my-4'>
                If you care for your time, I hands down would go with this."
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
                Solid foundation for any project
              </h3>
              <p className='my-4'>
                Designing with Figma components that can be easily translated to
                the utility classes of Tailwind CSS is a huge timesaver!"
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
                Mindblowing workflow
              </h3>
              <p className='my-4'>
                Aesthetically, the well designed components are beautiful and
                will undoubtedly level up your next application."
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
                Efficient Collaborating
              </h3>
              <p className='my-4'>
                You have many examples that can be used to create a fast
                prototype for your team."
              </p>
            </blockquote>
            <figcaption className='flex items-center justify-center '>
              <img
                className='rounded-full w-9 h-9'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png'
                alt='profile picture'
              />
              <div className='space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3'>
                <div>Joseph McFall</div>
                <div className='text-sm text-gray-500 dark:text-gray-400'>
                  CTO at Google
                </div>
              </div>
            </figcaption>
          </figure>
        </div> */}

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
