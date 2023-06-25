function songs(inputArr) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let number = inputArr.shift();
  let inputTypeList = inputArr.pop();
  for (let index = 0; index < inputArr.length; index++) {
    let currentTypeList = inputArr[index].split("_")[0];
    let songName = inputArr[index].split("_")[1];
    let songDuration = inputArr[index].split("_")[2];

    if (inputTypeList === currentTypeList) {
      let mySong = new Song(currentTypeList, songName, songDuration);
      console.log(mySong.name);
    } else if (inputTypeList === "all") {
      let mySong = new Song(currentTypeList, songName, songDuration);
      console.log(mySong.name);
    }
  }
}
songs([
  3,
  "favourite_DownTown_3:14",
  "favourite_Kiss_4:16",
  "favourite_Smooth Criminal_4:01",
  "favourite",
]);
