import type { IAddress } from "@/entities/models/address.interface.js";
import type { IAdressRepository } from "@/repositories/adress.repository.interface.js";

export class CreateAddressUseCase{

    constructor(private addressRepository: IAdressRepository){}

    public async handler(address: IAddress):Promise<IAddress | undefined>{
        return await this.addressRepository.create(address)
    }


}