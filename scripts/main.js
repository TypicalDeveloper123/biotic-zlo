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
  "corpuscles-blood-boulder", "corpuscles-coagulated-blood-boulder"
)


