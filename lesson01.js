async function homeWork() {
  // C ==> F
  const cilcyFarang = await function () {
    const cilcy = +prompt('set tempertaure in Cilcy: ');
    const farang = (9 / 5) * cilcy + 32;
    return alert(`${cilcy} C => ${farang} F`);
  };
  cilcyFarang();

  // rename
  const reName = await function () {
    const name = 'Василий';
    const admin = name;
    return console.log(admin);
  };
  reName();

  // console.log
  const consoleLog = await function () {
    const one = 10 + 10 + '10'; //number + number + string
    const two = 10 + '10' + 10; //number+string+number
    const three = 10 + 10 + +'10'; //number+number+number
    const four = 10 / -'';
    const five = 10 / +'2,5';
    let arr = [one, two, three, four, five];

    return arr.map((item) => console.log(item));
  };
  consoleLog();
}
homeWork();
