const corpuscles = Vars.mods.locateMod("corpuscles").meta;

corpuscles.displayName = Core.bundle.get("mod.corpuscles.name");
corpuscles.author = Core.bundle.get("mod.corpuscles.author");
corpuscles.description = Core.bundle.get("mod.corpuscles.description");

corpuscles.subtitle = Core.bundle.get("mod.corpuscles.subtitle");

SaveFileReader.fallback.putAll(
  "corpuscles-biotic-zlo-distribution-aluminum-duct", "corpuscles-biotic-zlo-distribution-aluminum-channel",
  "corpuscles-biotic-zlo-distribution-aluminum-junction", "corpuscles-biotic-zlo-distribution-channel-junction",
  "corpuscles-biotic-zlo-distribution-aluminum-router", "corpuscles-biotic-zlo-distribution-channel-router",
  "corpuscles-biotic-zlo-distribution-aluminum-bridge", "corpuscles-biotic-zlo-distribution-channel-bridge",

  "corpuscles-biotic-zlo-liquid-liquid-junction", "corpuscles-biotic-zlo-liquid-fluid-junction",
  "corpuscles-biotic-zlo-liquid-liquid-router", "corpuscles-biotic-zlo-liquid-fluid-router",
  "corpuscles-biotic-zlo-liquid-liquid-bridge", "corpuscles-biotic-zlo-liquid-fluid-bridge",

  "corpuscles-biotic-zlo-a1-liquid-blood", "corpuscles-biotic-zlo-liquid-liquidblood",
  "corpuscles-biotic-zlo-tile-BLOOD", "corpuscles-biotic-zlo-tile-COAGULATED-BLOOD",
  "corpuscles-biotic-zlo-wall-BLOOD", "corpuscles-biotic-zlo-wall-COAGULATED-BLOOD",

  "corpuscles-blood-boulder", "corpuscles-coagulated-blood-boulder",
  "corpuscles-biotic-zlo-wall-BONE", "corpuscles-biotic-zlo-wall-DENSE-BONE",
  "corpuscles-biotic-zlo-wall-FLESH", "corpuscles-biotic-zlo-wall-DENSE-FLESH",

  "corpuscles-biotic-zlo-wall-BLOODSTONE", "corpuscles-biotic-zlo-wall-SCORIA",
  "corpuscles-biotic-zlo-tile-BLOODSTONE", "corpuscles-biotic-zlo-tile-SCORIA",
  "corpuscles-bloodstone-boulder", "corpuscles-scoria-boulder",
  "corpuscles-bloodstone-vent", "corpuscles-scoria-vent",

  "corpuscles-biotic-zlo-wall-HEMATITE", "corpuscles-biotic-zlo-wall-LODESTONE",
  "corpuscles-biotic-zlo-tile-HEMATITE", "corpuscles-biotic-zlo-tile-LODESTONE",
  "corpuscles-hematite-boulder", "corpuscles-lodestone-boulder",
  "corpuscles-hematite-vent", "corpuscles-lodestone-vent"
)


