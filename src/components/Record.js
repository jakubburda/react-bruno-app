import { BsFiletypeDocx } from "react-icons/bs";
import { AiOutlineFilePdf } from "react-icons/ai";

const Record = ({ record, index }) => {

    const handleDownloadDocx = () => {
        const link = document.createElement('a');
        link.href = record['odkaz-stažení-docx'];
        link.download = record['akt-typ-sbírky'] + "_" + record['znění-dokument-id'] + ".docx"; // Název
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleDownloadPdf = () => {
        const link = document.createElement('a');
        link.href = record['odkaz-stažení-pdf'];
        link.download = record['akt-typ-sbírky'] + "_" + record['znění-dokument-id'] + ".pdf"; // Název
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className='flex w-full justify-between border border-gray-300 p-2 mb-2 hover:border-gray-400 rounded'>
            <div className="flex items-center w-full gap-3 text-sm">
                <p>{index}.</p>
                <p>{record["akt-název-vyhlášený"] || ''}</p>
            </div>

            <div className="flex justify-center items-center">
                <button 
                    type="button"
                    title="Stáhnout v Docx souboru"
                    className="flex justify-center items-center cursor-pointer p-1 px-4 border text-sm rounded bg-[#555bff] hover:bg-[#3b41ff] text-white"
                    onClick={handleDownloadDocx}
                >
                    Stáhnout
                    <BsFiletypeDocx  className="text-base ml-2" />
                </button>

                <button 
                    type="button"
                    title="Stáhnout v Pdf souboru"
                    className="flex justify-center items-center cursor-pointer p-1 px-4 border text-sm rounded bg-red-400 hover:bg-red-500 text-white"
                    onClick={handleDownloadPdf}
                >
                    Stáhnout
                    <AiOutlineFilePdf  className="text-base ml-2" />
                </button>
            </div>
        </div>
    )
}

export default Record;