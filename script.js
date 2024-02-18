document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("instrumentsTable");

  const tableData = [
    { instruments: "INTERFACE", midiCh: "", midiChain: "EVOLVER" },
    { instruments: "EVOLVER", midiCh: 2, midiChain: "MOOG" },
    { instruments: "MOOG", midiCh: 1, midiChain: "PROPHET" },
    { instruments: "PROPHET", midiCh: 8, midiChain: "MOPHO" },
    { instruments: "MOPHO", midiCh: 8, midiChain: "KROME" },
    { instruments: "KROME", midiCh: 7, midiChain: "MIDI IN INTERFACE" },
    { instruments: "NORD", midiCh: 5, midiChain: "" },
  ];

  tableData.forEach((item) => {
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = item.instruments;
    cell2.textContent = item.midiCh;
    cell3.textContent = item.midiChain;
  });
});
