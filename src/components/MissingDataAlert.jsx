export default function MissingDataAlert() {
    return (
      <div className="flex justify-center items-center h-40 mt-10">
        <container className="bg-blue-400 p-5 rounded-lg"> 
          <message className="text-5xl"> No se encontraron datos </message>
        </container>
      </div>
        
    )  
  }