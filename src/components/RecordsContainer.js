import Record from './Record';

const RecordsContainer = ({ data }) => {

    return (
      <div className='flex flex-col items-center w-3/6 h-4/5 bg-white p-6 rounded shadow-lg overflow-y-scroll'>
        <div className='flex mt-4'>
          <h1 className='text-lg'>Záznamy</h1>
        </div>

        <div className='w-full mt-8'>
          {data.map((record, index) => {
            return (
              <Record 
                key={record.id}
                index={index + 1}
                record={record}
              />
            )
          })}
        </div>
      </div>
    )
}

export default RecordsContainer;