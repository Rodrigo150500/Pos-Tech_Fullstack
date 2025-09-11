import { AddressRepository } from "@/repositories/pg/address.repository.js";
import { CreateAddressUseCase } from "../create-address.js";

export function MakeCreateAddressUseCase(){
    const addressRepository = new AddressRepository()
    const createAddressUseCase = new CreateAddressUseCase(addressRepository)

    return createAddressUseCase

}