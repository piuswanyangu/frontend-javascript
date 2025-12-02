// interface for major credits
interface MajorCredits {
    credits: number;
    brand: "major"
}

// minorcredits interface
interface MinorCredits {
    credits: number;
    brand: "minor"

}

// function to sum credits
function sumMajorCrdits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits, brand: "major"
    }
}

// function to sum minorcredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits, brand: 'minor'
    }
}
// example how branding prevents mixing
const major1: MajorCredits = {credits: 3, brand: "major"}

const minor1: MinorCredits = {credits: 2, brand: "minor"}