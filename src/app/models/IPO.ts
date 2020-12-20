export default interface IPO {
  companyCode: string;
  companyName: string;
  stockExchange: string;
  totalShares: number;
  pricePerShare: number;
  openDate: Date;
  remarks: string;
}
