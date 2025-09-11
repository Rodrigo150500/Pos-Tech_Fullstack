import { AddressRepository } from "@/repositories/pg/address.repository.js";
import { FindAddressByPerson } from "../find-address-by-person.js";

export function makeFindAdressByPerson(){

    const addressRepository = new AddressRepository()
    const findAddressByPersonUseCase = new FindAddressByPerson(addressRepository)

    return findAddressByPersonUseCase
}