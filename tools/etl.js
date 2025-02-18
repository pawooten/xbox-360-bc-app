// 2025-02-18
// Wikipedia lists 632 of 2155 Backwards compatible Xbox 360 games.

const tableRows = document.querySelectorAll("[id='360softwarelist'] tbody tr");

const result = { log: [], formats: [], games: [] };

result.log.push(`Found ${tableRows.length} XBOX 360 table rows.`);

const formatSet = new Set();
let count = 0;
for (const tableRow of tableRows) {
    const format = tableRow.cells[2].innerText;
    formatSet.add(format);
    if (!format.includes("XBLA")) {
        result.games.push(tableRow.cells[0].textContent.replace('\n', ''));
        count++;
    }
}
result.formats = Array.from(formatSet);
result.log.push(`Formats (${formatSet.size}): ${result.formats.join(", ")}`);
result.log.push(`Found ${count} total XBOX 360 games that are not XBLA.`);
console.log(result);