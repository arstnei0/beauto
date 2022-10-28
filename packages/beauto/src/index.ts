import { createUnplugin } from "unplugin"
import type { Options } from "./types"

export default createUnplugin<Options | undefined>((options) => ({
	name: "beauto",
	transform: (code, id) => {
		console.log(code)

		return code
	}
}))
