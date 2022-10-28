import { createUnplugin } from "unplugin"
import { transform } from "./transformer"
import type { Options } from "./types"

export default createUnplugin<Options | undefined>((options) => ({
	name: "beauto",
	transform(code, id) {
		if (/\.bto$/i.test(id)) {
			return transform(code, id)
		}

		return code
	},
	transformInclude(id) {
		return /\.bto$/i.test(id)
	},
}))
