import type { PageLoad } from "./$types"
import { getAllPayees } from "$lib/api/PayeeAPI";
import type { GetPayeeDto } from "$lib/types/api/Payee";

export const load: PageLoad = async () => {
    const payees: GetPayeeDto[] = await getAllPayees();
    return {
        payees: payees
    }
};

