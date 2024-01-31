import AWS from 'aws-sdk';
import PlusIcon from '@rsuite/icons/Plus';

import { useState } from 'react';
const Uploader =()=>{
    const [data,setdata]=useState(null);

    // const config={
    //     bucketName:import.meta.env.AWS_BUCKET_NAME,
    //     dirName:"acfp-main-folder/",
    //     region:import.meta.env.AWS_BUCKET_REGION,
    //     accessKeyID:import.meta.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY
    // }

    const config={
        bucketName: "acfp-public-bucket",
        dirName: "acfp-main-folder/",
        region: "ap-south-1",
        accessKeyId: "AKIAYS2NTGCF6D3VLLSO",
        secretAccessKey: "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"
        // bucketName: "",
        // dirName:"userprofiles",
        // region: "",
        // accessKeyId: "",
        // secretAccessKey: ""
      }

    const handleFileUpload=(event)=>{
        const file = event.target.files[0];

        if (!config.bucketName || !config.region || !config.accessKeyId || !config.secretAccessKey){
            // console.error("AWS CONFIGURATION IS INCOMPLETE");
            return;
        }
        AWS.config.update({
            accessKeyId: config.accessKeyId,
            secretAccessKey: config.secretAccessKey,
            region: config.region
        })

        //Create new Instance
        const S3 =new AWS.S3();

        //Having file in array Buffer
        const reader=new FileReader();

        reader.onload =()=>{
            const fileBuffer = reader.result;
            S3.upload({
                Bucket: config.bucketName,
                Key: `${config.dirName}/${file.name}`,
                Body: fileBuffer,
                ACL: 'public-read',
                ContentType: file.type
            }, (err,uploadedData) => {
                if (err){
                    console.log(err);
                }
                else{
                    console.log(uploadedData);
                    console.log(file);
                    setdata(uploadedData.Location);
                }
                 
            })
        }
        reader.readAsArrayBuffer(file);
    }
    return(
        <div id='upl'>
            <br/>
            <label id="pupld" className="upload-button">
                <PlusIcon />
                <input type="file" onChange={handleFileUpload} hidden />
            </label>
            {/* <button icon={<ExpandOutlineIcon />}><input type='file' id='pupld' onClick={handleFileUpload}/></button> */}
            <br/>
            {data && <img id='img' src={data} alt="uploaded Data"/>}
        </div>
    );
}
export default Uploader;