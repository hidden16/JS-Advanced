class WineSelection {
    constructor(spaceInput) {
        this.space = spaceInput;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }
        const wine = {
            wineName,
            wineType,
            price,
            paid: false
        };
        this.wines.push(wine);
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const wine = this.wines.find(wine => wine.wineName == wineName);
        if (wine == undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (wine.paid) {
            throw new Error(`${wineName} is already paid.`);
        }

        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`
    }

    openBottle(wineName) {
        const index = this.wines.findIndex(wine => wine.wineName == wineName);
        const wine = this.wines[index];
        if (wine == undefined) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        if(wine.paid == false){
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines.splice(index, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType){
        const result = [];
        if(wineType == undefined){
            result.push(`You have space for ${this.space - this.wines.length} bottles more.`);
            result.push(`You paid ${this.bill}$ for the wine.`);
            this.wines.sort((a,b) => a.wineName.localeCompare(b.wineName));
            for (const wine of this.wines) {
                let payment = 'Not Paid';
                if(wine.paid){
                    payment = 'Has Paid';
                }
                result.push(`${wine.wineName} > ${wine.wineType} - ${payment}.`);
            }
        }else {
            const wine = this.wines.find(wine => wine.wineType == wineType);
            if(wine == undefined){
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
            let payment = 'Not Paid';
            if(wine.paid){
                payment = 'Has Paid';
            }
            result.push(`${wine.wineName} > ${wine.wineType} - ${payment}.`);
        }
        return result.join('\n');
    }
}

let selection = new WineSelection(5);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
//You drank a bottle of Sauvignon Blanc Marlborough.'