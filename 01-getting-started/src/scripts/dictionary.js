
const functions = {
    provinceName: (provCode) => {
        const province = {
            AB: "Alberta",
            BC: "British Columbia",
            MB: "Manitoba",
            NB: "New Brunswick",
            NL: "Newfoundland and Labrador",
            NS: "Nova Scotia",
            NT: "Northwest Territories",
            NU: "Nunavut",
            ON: "Ontario",
            PE: "Prince Edward Island",
            QC: "Quebec",
            SK: "Saskatchewan",
            YT: "Yukon",
        };
        
        return province[provCode];
    }
};


// Province Code	Name
// AB	Alberta
// BC	British Columbia
// MB	Manitoba
// NB	New Brunswick
// NL	Newfoundland and Labrador
// NS	Nova Scotia
// NT	Northwest Territories
// NU	Nunavut
// ON	Ontario
// PE	Prince Edward Island
// QC	Quebec
// SK	Saskatchewan
// YT	Yukon


export default functions