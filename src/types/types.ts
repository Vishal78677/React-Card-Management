/* eslint-disable @typescript-eslint/no-explicit-any */


export interface DropDownCardTransaction {
    id: number;
    icon: any;
    title: string,
    date: string,
    amount: string,
    color: string,
    description: string,
    status: string,
}

export interface DropDownCardItem {
    id: number,
    title: string,
    icon: any,
    data: DropDownCardTransaction[],
}


export interface ActionCardData1{
    id: number;
    title: string;
    type: string
}

export interface ActionCardData2 extends ActionCardData1{
    icon: any
}


export interface FormInitialValues {
    name: string;
    bankName: string;
    cardNumber: string;
    expiration: string;
    cvv: string;
    cardType: string;
    setAsDefault: boolean;
    addToGPay: boolean;
    action?: string;
}

export interface CardType extends FormInitialValues {
  id: number | string;
}
