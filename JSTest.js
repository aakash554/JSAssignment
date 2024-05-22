/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs=[];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (v_name,v_date,v_id,v_type) {
    data={
        "name":v_name,
        "date":v_date,
        "id":v_id,
        "type":v_type
    }
    NFTs.push(data);
    console.log("Metadata added sucessfully");
    console.log("\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i=0; i<NFTs.length; i++) {
        console.log("Name: " + NFTs[i].name);
        console.log("Date: " + NFTs[i].date);
        console.log( "ID: " + NFTs[i].id);
        console.log("Type: " + NFTs[i].type);
        console.log("\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply of NFTs is: " + NFTs.length);
}

// call your functions below this line
mintNFT("Aakash","2021-01-01","101","Art");
mintNFT("Madhav","2022-01-01","102","Video");
mintNFT("Ravneet","2023-01-01","103","Video");
mintNFT("Aryan","2024-01-01","104","Audio");
listNFTs();
getTotalSupply();


