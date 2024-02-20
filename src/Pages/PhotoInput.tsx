import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tesseract from 'tesseract.js';
import NavigationBar from "../Components/NavigationBar";
import "../Styles/inputstyle.css";

 
function PhotoInput( ) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [extractedAmount, setExtractedAmount] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImageUrl(imageUrl);
    }
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      Tesseract.recognize(
        selectedFile,
        'eng',
        {
          logger: (info: { progress: number; status: string; }) => console.log(info),
        }
      ).then(({ data: { text } }) => {
        console.log(text);
        const amountMatch = text.match(/\d+/);
 
        const extractedAmount = amountMatch ? amountMatch[0] : 'Not found';
 
        setExtractedAmount(extractedAmount);

        
         
        
      });
    } 
  };

  return (
    <div>
      <NavigationBar
        menuItems={[
          { name: 'Home', link: '/dashboard' },
          { name: 'Community', link: '/board' },
          { name: 'Moneybook', link: '/moneybook' },
          { name: 'Mypage', link: '/mypage' },
        ]}
      />
      <div className="inputContainer">
        <Link to="/moneybook">
          <button className='backbtn' >&lt;</button>
        </Link>

        <div className='uploadbox'>
          <h2>Enter receipt as consumption history</h2>
          <p style={{ fontSize: extractedAmount ? '2em' : '1em' }}>
            {extractedAmount ? `Extracted Amount: ${extractedAmount}` : 'Select a photo file and AI will automatically enter it into your consumption history.'}
          </p>
          <br />
          <input type="file" id="fileInput" onChange={handleFileChange} /> <br />
          {uploadedImageUrl && <img style={{width:"30%"}} src={uploadedImageUrl} alt="Uploaded" />}
          <button className='savebtn' onClick={handleFileUpload}>file upload</button>
        </div>

        <div className='sulmung'>
          <p>Your files are secure on NeatFin servers and will be deleted if you do not save them. <br />
            By using this service, you agree to NeatFin's Terms of Use and Privacy Policy.</p>
          <h4>1. Please scan or take a digital photo of your receipt. The photo must clearly show the contents of the receipt.
            <br />
            2. Uses OCR technology to extract text from photos. This allows the computer to read the text on the receipt.
            <br />
            3. Create consumption details based on the extracted text. Extract the necessary information and organize the amount, date, item, etc. into consumption details.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default PhotoInput;
