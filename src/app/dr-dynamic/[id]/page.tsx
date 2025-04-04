import { SingleCharacter } from "@/models/SingleCharacter";

interface IPropsSingleCharacter {
  params: Promise<{id: string}>
}

const getSingleCharacter = async (id: string) => {
    const requestApi = await fetch("https://dragonball-api.com/api/characters/"+id)
    const data: SingleCharacter = await requestApi.json();

    return data;
  }

const SingleCharacterById = async ({ params }: IPropsSingleCharacter) => {

  const { id } = await params;
  
  if (!id) {
    return {
      notFound: true
    }
  }

  const characters = await getSingleCharacter(id);

  return (
    <div>
      <header className="bg-slate-900 text-white p-5 text-center font-bold">
        <h1>Dragon Ball Personaje</h1>
      </header>
      <main className="max-w-4xl mx-auto py-5">
      <section className="flex justify-between items-start">
        <div className="w-1/3">
          <img className="h-80 mx-auto" src={characters.image} alt={characters.name} />
        </div>
        <div className="w-2/3">
          <h2 className="font-bold text-2xl">
            {
              characters.name
            } <span className="font-normal text-gray-500 text-sm"> {characters.race} </span>
          </h2>
          <p className="text-justify ">
            {
              characters.description
            }
          </p>
        </div>
      </section>
      <section>
        {
          characters.transformations.length == 0 && (
            <p>Este personaje no tiene transformaciones</p>
          )
        }
        {
          characters.transformations.length > 0 && (
            <div className="flex gap-5 flex-wrap mt-10">
              {
                characters.transformations.map((transformation) => {
                  return (<div key={transformation.id} className="text-center font-light p-5 bg-slate-100 rounded"> 
                    <img className="h-40 mx-auto" src={transformation.image} alt={transformation.name} />
                    <h4>
                      {
                        transformation.name
                      }
                    </h4>
                  </div>)
                })
              }
            </div>
          )
        }
      </section>
        
      </main>
      
    </div>
  )
}

export default SingleCharacterById;